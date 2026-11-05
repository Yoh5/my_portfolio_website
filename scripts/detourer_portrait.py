# -*- coding: utf-8 -*-
"""Detoure le portrait du heros et le rend utilisable dans les deux themes.

Pourquoi : la photo d'origine porte son propre fond blanc (pourtour a 231/255,
58 % des pixels de bord au-dessus de 240). Pose sur #0f172a elle donne un aplat
a 13,9:1 -- l'objet le plus lumineux de la page, qui crie plus fort que le
titre ; posee sur #f8fafc elle disparait (1,2:1). Un fond qui ne s'adapte a
aucun des deux themes n'est pas un reglage de coins, c'est un fond a retirer.

Methode, et pourquoi pas un seuil simple : un seuil global percerait le polo,
qui est creme (208-210) et pas si loin du fond (241-248). On isole donc la
composante CONNEXE au bord. Le polo est une zone interieure : il n'est jamais
atteint, quel que soit le seuil.

Le bas est fondu : une fois le fond parti, la coupe franche en travers du torse
flotterait dans le vide. Le degrade rend la figure a la page au lieu de
l'amputer.

    python scripts/detourer_portrait.py
"""
import os

import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

ICI = os.path.dirname(os.path.abspath(__file__))
RACINE = os.path.dirname(ICI)
IMAGES = os.path.join(RACINE, "public", "images")

SOURCE = os.path.join(IMAGES, "axel-1120.jpg")   # on part du plus grand
BASE = "axel-detoure"
TAILLES = (1120, 560)

TOLERANCE = 20      # distance max au fond ; 26 mordait la manche, 16 festonnait
ADOUCI = 1.2        # px de flou sur le masque : evite l'escalier sur l'epaule
EROSION = 2         # px retires au bord : mange la frange blanche de matte
FONDU_BAS = 0.30    # part de la hauteur ou la figure se fond dans la page :
                    # plus court, les flancs du torse descendent en deux traits
                    # verticaux et le fondu se lit comme un rectangle.


def masque_sujet(im):
    """Alpha du sujet : tout ce qui n'est pas la region de fond touchant le bord."""
    arr = np.asarray(im.convert("RGB")).astype(np.int16)
    h, w, _ = arr.shape

    # Couleur du fond : mediane des quatre coins, pas un blanc suppose.
    coins = np.concatenate([
        arr[:12, :12].reshape(-1, 3), arr[:12, -12:].reshape(-1, 3),
        arr[-12:, :12].reshape(-1, 3), arr[-12:, -12:].reshape(-1, 3),
    ])
    fond = np.median(coins, axis=0)
    print("couleur de fond relevee : %s" % fond.astype(int).tolist())

    proche = np.linalg.norm(arr - fond, axis=2) < TOLERANCE

    # On ne garde que ce qui communique avec le bord de l'image.
    etiquettes, n = ndimage.label(proche)
    bord = set(etiquettes[0, :]) | set(etiquettes[-1, :]) \
         | set(etiquettes[:, 0]) | set(etiquettes[:, -1])
    bord.discard(0)
    fond_connexe = np.isin(etiquettes, list(bord))
    print("%d composantes de fond, %d touchent le bord ; fond = %.1f %% de l'image"
          % (n, len(bord), 100 * fond_connexe.mean()))

    sujet = ~fond_connexe

    # Les reflets du studio laissent des ilots clairs qui ne communiquent pas
    # avec le bord : ils survivent au detourage en poussiere a cote de l'epaule,
    # et surtout ils elargissent la boite de recadrage. On ne garde que la
    # composante la plus grande -- la personne.
    etiq_s, n_s = ndimage.label(sujet)
    if n_s > 1:
        tailles = ndimage.sum(sujet, etiq_s, range(1, n_s + 1))
        principal = int(np.argmax(tailles)) + 1
        retire = sujet.sum() - tailles[principal - 1]
        sujet = etiq_s == principal
        print("%d ilots ; on garde le plus grand, %d px de poussiere retires"
              % (n_s, int(retire)))

    # Frange blanche : les pixels de bordure sont un melange de sujet et de
    # fond clair, ils restent lumineux et dessinent un halo sur l'epaule une
    # fois poses sur du sombre. On retire cette couronne au lieu d'essayer de
    # la corriger en couleur.
    sujet = ndimage.binary_erosion(sujet, ndimage.generate_binary_structure(2, 2),
                                   iterations=EROSION)

    alpha = np.where(sujet, 255, 0).astype(np.uint8)
    return Image.fromarray(alpha, mode="L").filter(
        ImageFilter.GaussianBlur(ADOUCI))


def fondre_le_bas(alpha):
    """Degrade sur la tranche basse : la figure sort de la page, on ne la coupe pas."""
    a = np.asarray(alpha).astype(np.float32)
    h = a.shape[0]
    debut = int(h * (1 - FONDU_BAS))
    # Courbe en S plutot que lineaire : le depart du fondu ne doit pas
    # faire une arete visible en travers du torse.
    t = np.linspace(0.0, 1.0, h - debut, dtype=np.float32)
    rampe = 1.0 - (t * t * (3.0 - 2.0 * t))
    a[debut:] *= rampe[:, None]
    return Image.fromarray(a.astype(np.uint8), mode="L")


im = Image.open(SOURCE).convert("RGB")
alpha = fondre_le_bas(masque_sujet(im))

# Recadrage horizontal sur le sujet : le detourage laisse de larges vides.
colonnes = np.asarray(alpha).max(axis=0)
pleines = np.flatnonzero(colonnes > 8)
x0, x1 = int(pleines[0]), int(pleines[-1]) + 1
marge = int(0.04 * im.width)
x0, x1 = max(0, x0 - marge), min(im.width, x1 + marge)
print("recadrage horizontal : %d -> %d (%d px sur %d)" % (x0, x1, x1 - x0, im.width))

rgba = im.convert("RGBA")
rgba.putalpha(alpha)
rgba = rgba.crop((x0, 0, x1, im.height))

# Jamais agrandir : le recadrage a reduit la largeur utile, demander 1120 px
# au-dela de cette largeur ne rend pas du detail, il en invente.
tailles = sorted({min(t, rgba.width) for t in TAILLES}, reverse=True)
if tailles != sorted(TAILLES, reverse=True):
    print("largeur utile apres recadrage : %d px -> tailles rendues %s"
          % (rgba.width, tailles))

# Le WebP alpha sert tout le monde ou presque ; le PNG n'est la que pour le
# reste, donc une seule taille suffit. Et il reste en pleine qualite : reduire
# sa palette fait bander le degrade du bas, l'alpha ne s'y quantifie pas.
for large in tailles:
    h = round(rgba.height * large / rgba.width)
    red = rgba.resize((large, h), Image.LANCZOS)
    sorties = [("webp", {"quality": 86, "method": 6})]
    if large == min(tailles):
        sorties.append(("png", {"optimize": True}))
    for ext, args in sorties:
        chemin = os.path.join(IMAGES, "%s-%d.%s" % (BASE, large, ext))
        red.save(chemin, **args)
        print("%-34s %4d x %4d  %5d Ko"
              % (os.path.basename(chemin), large, h,
                 os.path.getsize(chemin) // 1024))

# Apercus, pour juger au lieu de supposer.
for nom, fond_hex in (("sombre", "#0f172a"), ("clair", "#f8fafc")):
    large = 560
    h = round(rgba.height * large / rgba.width)
    red = rgba.resize((large, h), Image.LANCZOS)
    plaque = Image.new("RGB", (large + 160, h + 120), fond_hex)
    plaque.paste(red, (80, 60), red)
    chemin = os.path.join(ICI, "apercu-%s.png" % nom)
    plaque.save(chemin)
    print("apercu :", chemin)
