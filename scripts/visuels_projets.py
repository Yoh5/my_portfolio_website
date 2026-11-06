# -*- coding: utf-8 -*-
"""Produit les visuels manquants du portfolio : couvertures et pieces citees.

Trois sources, dans cet ordre de preference :

1. **Une couverture deja faite dans le dossier du projet.** C'est la meilleure :
   elle a ete dessinee pour ce projet et elle est deja publiee ailleurs.
2. **Une image produite par le produit lui-meme** -- la scene du refus de Spend
   Mandate est rendue par son propre moteur video, donc elle ne peut pas mentir
   sur ce que fait le produit.
3. **Une couverture typographique generee ici**, en dernier recours. Pas de
   capture d'ecran : une capture vieillit a la premiere ligne d'interface
   changee, et GitHub comme LinkedIn la servent en apercu de lien ou elle est
   illisible.

La planche KeeperHub est traitee a part. Elle porte le meme navy et le meme
vert que ce site (#111828 contre #0f172a, #07ff62 contre #22c55e) : posee
telle quelle, elle se lirait comme une banniere maison, et une distinction qui
a l'air d'avoir ete dessinee par son recipiendaire ne prouve rien. On en
decoupe donc la ligne qui porte le fait, pour la citer comme un document.

    python scripts/visuels_projets.py
"""
import os
import shutil

from PIL import Image, ImageDraw, ImageFont

ICI = os.path.dirname(os.path.abspath(__file__))
RACINE = os.path.dirname(ICI)
IMAGES = os.path.join(RACINE, "public", "images")
ATELIER = os.path.dirname(RACINE)          # le dossier AI, ou vivent les projets

L, H = 1200, 630
FOND = (15, 23, 42)         # --bg-primary du site
CARTE = (30, 41, 59)        # --bg-card
BLANC = (248, 250, 252)
ARDOISE = (148, 163, 184)
VERT = (34, 197, 94)        # --accent
POLICES = "C:/Windows/Fonts/"


def police(nom, taille):
    for essai in (nom, "segoeui.ttf", "arial.ttf"):
        chemin = os.path.join(POLICES, essai)
        if os.path.exists(chemin):
            return ImageFont.truetype(chemin, taille)
    return ImageFont.load_default()


def couper(d, texte, fonte, largeur):
    """Retourne les lignes de `texte` qui tiennent dans `largeur`."""
    mots, lignes, courante = texte.split(), [], ""
    for mot in mots:
        essai = (courante + " " + mot).strip()
        if d.textlength(essai, font=fonte) <= largeur:
            courante = essai
        else:
            if courante:
                lignes.append(courante)
            courante = mot
    if courante:
        lignes.append(courante)
    return lignes


def enregistrer(im, nom):
    """WebP pour le service, JPEG pour le repli. Jamais de PNG : ce sont des
    photos de texte sur aplat, le JPEG suffit et pese trois fois moins."""
    base = os.path.join(IMAGES, nom)
    rgb = im.convert("RGB")
    rgb.save(base + ".webp", quality=88, method=6)
    rgb.save(base + ".jpg", quality=86, optimize=True, progressive=True)
    return (os.path.getsize(base + ".webp") // 1024,
            os.path.getsize(base + ".jpg") // 1024)


def couverture(nom_fichier, titre, phrase, preuve):
    img = Image.new("RGB", (L, H), FOND)
    d = ImageDraw.Draw(img)

    # Le pointille vertical du site, repris en filigrane.
    x, y = L - 110, 50
    while y < H - 50:
        d.ellipse([x - 2, y - 2, x + 2, y + 2], fill=CARTE)
        y += 20

    MG = 80
    d.text((MG, 86), titre, font=police("segoeuib.ttf", 72), fill=BLANC)

    fonte_p = police("segoeui.ttf", 32)
    y = 200
    for ligne in couper(d, phrase, fonte_p, L - MG - 190):
        d.text((MG, y), ligne, font=fonte_p, fill=ARDOISE)
        y += 46

    d.rectangle([MG, H - 170, MG + 86, H - 166], fill=VERT)
    d.text((MG, H - 136), preuve, font=police("segoeuib.ttf", 30), fill=VERT)
    return enregistrer(img, nom_fichier)


# --- 1. Couvertures deja faites, reprises telles quelles -------------------
REPRISES = {
    "cover-failclosed": "fail-closed/fail-closed-cover-1200x630.png",
    # Rendue par le moteur video du produit : la scene du refus, avec le
    # chiffre que le mandat a arrete. Elle dit l'argument sans le resumer.
    "cover-spendmandate": "paypal-mandat/submission/video/apercu/4-refus.png",
}

print("Couvertures reprises d'un dossier projet :")
for cible, source in REPRISES.items():
    chemin = os.path.join(ATELIER, source)
    if not os.path.exists(chemin):
        print("  MANQUE  %s (%s)" % (cible, source))
        continue
    im = Image.open(chemin)
    im.thumbnail((1200, 1200), Image.LANCZOS)
    ko = enregistrer(im, cible)
    print("  %-22s %s  %4d x %4d  %3d/%3d Ko (webp/jpg)"
          % (cible, os.path.basename(source), im.width, im.height, *ko))

# --- 2. Couvertures generees, faute de mieux -------------------------------
#     La phrase et la preuve viennent de la fiche du projet, qui est verifiee.
A_PRODUIRE = [
    ("cover-probe", "Probe",
     "Chaque question est b\u00e2tie sur la r\u00e9ponse pr\u00e9c\u00e9dente. Quatre signaux de "
     "diction mesur\u00e9s par du code, jamais par le mod\u00e8le.",
     "6 langues  \u00b7  178 tests"),
    ("cover-unscripted", "Unscripted",
     "Rep\u00e8re qu'une r\u00e9ponse est lue plut\u00f4t que pens\u00e9e, et laisse une session "
     "de c\u00f4t\u00e9 chaque fois qu'il doute.",
     "89 % de justesse"),
    ("cover-carbongate", "Carbon Gate",
     "Une int\u00e9gration continue qui chiffre son propre carbone et refuse "
     "d'annoncer un gain qu'elle ne peut pas prouver.",
     "191 tests  \u00b7  ISO/IEC 21031"),
    ("cover-veille", "Tech Watch Agent",
     "Veille autonome qui apprend de ce que le lecteur marque hors sujet, "
     "au lieu de reproposer la m\u00eame chose.",
     "101 tests"),
    ("cover-holokia", "Holokia Interview Agent",
     "Agent d'entretien RH en production, utilis\u00e9 chaque jour par des "
     "recruteurs. Six boucles de raisonnement.",
     "En production"),
]

print("\nCouvertures generees :")
for nom, titre, phrase, preuve in A_PRODUIRE:
    ko = couverture(nom, titre, phrase, preuve)
    print("  %-22s %3d/%3d Ko (webp/jpg)" % (nom, *ko))

# --- 2 bis. Les travaux de recherche --------------------------------------
#     Meme fabrique que les couvertures de projet : un titre, la question, et
#     le chiffre qui la tranche. Un article ou un carnet n'a pas de capture
#     d'ecran a montrer, et un graphique sorti de son protocole ne dit rien.
RECHERCHE = [
    ("cover-rech-titfortat", "Tit for Tat, LLM",
     "Ce qui sépare deux tailles d'un même modèle n'est pas de trahir moins, "
     "c'est de savoir rentrer après avoir été puni.",
     "14 % contre 100 % de réparation"),
    ("cover-rech-biasbounty", "Bias Bounty",
     "La seule couche fine de chaleur urbaine manque là où le barème "
     "automatique ne peut pas la déclarer manquante.",
     "691 secteurs sur 1 192  ·  85,8 % tribaux"),
    ("cover-rech-tournoi", "Donnant-donnant",
     "Axelrod a bien organisé un tournoi et Donnant-donnant l'a bien gagné. "
     "La suite de l'histoire ne tient pas.",
     "76 à 79 % d'accidents sans retour"),
]

print()
print("Couvertures de recherche :")
for nom, titre, phrase, preuve in RECHERCHE:
    ko = couverture(nom, titre, phrase, preuve)
    print("  %-26s %3d/%3d Ko (webp/jpg)" % (nom, *ko))

# --- 3. La distinction KeeperHub, citee et non fondue ----------------------
PLANCHE = os.path.join(ATELIER, "document_rapport_stage", "candidature",
                       "keeperhub-hackathon-finalists.jpg")
print("\nDistinction KeeperHub :")
if not os.path.exists(PLANCHE):
    print("  MANQUE", PLANCHE)
else:
    planche = Image.open(PLANCHE)

    # La ligne qui porte le fait. Affichee entiere dans une colonne de
    # contenu, la planche rend ce pseudo a ~9 px : la preuve disparait
    # exactement la ou elle compte.
    ligne = planche.crop((620, 330, 905, 398))
    ligne = ligne.resize((ligne.width * 2, ligne.height * 2), Image.LANCZOS)
    ko = enregistrer(ligne, "keeperhub-ligne")
    print("  %-22s %4d x %3d  %3d/%3d Ko" % ("keeperhub-ligne", ligne.width,
                                             ligne.height, *ko))

    ko = enregistrer(planche, "keeperhub-planche")
    print("  %-22s %4d x %3d  %3d/%3d Ko" % ("keeperhub-planche", planche.width,
                                             planche.height, *ko))
