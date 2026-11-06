# -*- coding: utf-8 -*-
"""Prepare les sept certificats Anthropic pour la section Certifications.

Ce sont des captures d'ecran : plusieurs gardent une barre sombre de
navigateur en haut et une marge blanche de page autour. On isole donc le
rectangle colore du certificat lui-meme, en ecartant a la fois le presque
blanc (la page) et le presque noir (la barre).

Sortie en WebP pour le service et JPEG pour le repli, a 900 px de large : au
dela, on sert du poids que personne ne regarde dans une vignette.

    python scripts/certifs_anthropic.py
"""
import os

import numpy as np
from PIL import Image

ICI = os.path.dirname(os.path.abspath(__file__))
RACINE = os.path.dirname(ICI)
IMAGES = os.path.join(RACINE, "public", "images")
SOURCE = os.path.join(os.path.dirname(RACINE), "document_rapport_stage",
                      "candidature")

LARGEUR = 900

CERTIFICATS = [
    ("Capture d'écran 2026-08-03 150110.png", "cert-claude-101"),
    ("Capture d'écran 2026-08-03 150139.png", "cert-claude-code-101"),
    ("Capture d'écran 2026-08-03 150204.png", "cert-claude-platform-101"),
    ("Capture d'écran 2026-08-03 150219.png", "cert-claude-code-action"),
    ("Capture d'écran 2026-08-03 150235.png", "cert-ai-fluency"),
    ("Capture d'écran 2026-08-03 150249.png", "cert-anthropic-api"),
    ("Capture d'écran 2026-08-03 150303.png", "cert-mcp"),
]


def recadrer(im, marge=6):
    """Garde le rectangle du certificat, repere par sa couleur de fond.

    Les deux tentatives precedentes echouaient sur la meme chose : la barre de
    navigateur est grise a 50, au-dessus du seuil du noir, et le bandeau
    « Certificate of completion » contient une pastille blanche qui faisait
    chuter le taux de pixels utiles sur ces lignes-la. On ne devine donc plus
    ce qui n'est pas le certificat : on cherche ce qui l'est. Ces certificats
    sont des aplats de couleur unie, et cette couleur est de loin la plus
    frequente au centre de l'image.
    """
    arr = np.asarray(im.convert("RGB")).astype(np.int16)
    h, w, _ = arr.shape
    coeur = arr[h // 3:2 * h // 3, w // 4:3 * w // 4].reshape(-1, 3)
    couleurs, comptes = np.unique(coeur, axis=0, return_counts=True)
    fond = couleurs[int(np.argmax(comptes))]

    proche = np.linalg.norm(arr - fond, axis=2) < 40
    lignes = np.flatnonzero(proche.sum(axis=1) > w * 0.25)
    colonnes = np.flatnonzero(proche.sum(axis=0) > h * 0.25)
    if lignes.size == 0 or colonnes.size == 0:
        return im

    y0 = max(0, int(lignes[0]) - marge)
    y1 = min(h, int(lignes[-1]) + 1 + marge)
    x0 = max(0, int(colonnes[0]) - marge)
    x1 = min(w, int(colonnes[-1]) + 1 + marge)
    return im.crop((x0, y0, x1, y1))


print("%-26s %-14s %s" % ("fichier", "recadrage", "poids webp/jpg"))
for source, nom in CERTIFICATS:
    chemin = os.path.join(SOURCE, source)
    if not os.path.exists(chemin):
        print("  MANQUE", source)
        continue

    im = Image.open(chemin)
    avant = im.size
    im = recadrer(im)
    if im.width > LARGEUR:
        h = round(im.height * LARGEUR / im.width)
        im = im.resize((LARGEUR, h), Image.LANCZOS)

    base = os.path.join(IMAGES, nom)
    rgb = im.convert("RGB")
    rgb.save(base + ".webp", quality=88, method=6)
    rgb.save(base + ".jpg", quality=86, optimize=True, progressive=True)

    print("%-26s %-14s %3d/%3d Ko"
          % (nom, "%dx%d -> %dx%d" % (avant[0], avant[1], im.width, im.height),
             os.path.getsize(base + ".webp") // 1024,
             os.path.getsize(base + ".jpg") // 1024))
