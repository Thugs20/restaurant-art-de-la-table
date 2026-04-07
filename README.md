# ✦ Art de la Table — Site Vitrine Gastronomique

> **Projet de démonstration fictif** réalisé par **Fabrice Houeto**, développeur web.  
> Ce site ne représente aucun établissement réel. Il est conçu exclusivement à des fins de portfolio.

---

## Aperçu

Site vitrine d'un restaurant gastronomique fictif mêlant cuisine franco-africaine et élégance européenne. Le projet met en avant un design éditorial premium avec mode clair/sombre, animations au scroll, slider hero, menu filtrable et formulaire de réservation simulé.

**Stack :** HTML5 · CSS3 · JavaScript Vanilla — aucune dépendance externe (hors Google Fonts & Font Awesome)

---

## Fonctionnalités

- **Mode clair / sombre** — toggle animé, préférence mémorisée via `localStorage`
- **Hero slider** — 5 slides avec transition douce, animation lettre par lettre sur le titre, parallaxe au scroll et dots de navigation
- **Bandeau marquee** — défilement continu animé en CSS pur
- **Section About** — image avec cadre décalé, statistiques et bloc année
- **Menu filtrable** — filtres par catégorie (Entrées / Plats / Desserts / Boissons) sans rechargement
- **Galerie éditoriale** — grille asymétrique avec zoom au survol et lightbox
- **Slider de témoignages** — navigation manuelle et automatique
- **Formulaire de réservation** — simulation d'envoi (aucune donnée transmise)
- **Animations au scroll** — via `IntersectionObserver`, entrées depuis le bas / gauche / droite
- **Responsive** — mobile, tablette, desktop
- **Multilingue FR / EN** — switch sans rechargement de page
- **Navigation sticky** — transparente sur le hero, opaque au scroll

---

## Structure des fichiers

```
art-de-la-table/
├── index.html       # Structure HTML principale
├── style.css        # Styles (variables CSS, dark mode, animations, responsive)
├── script.js        # Interactivité (slider, filtres, scroll, thème, i18n)
└── README.md        # Ce fichier
```

> Les images proviennent d'**Unsplash** (licence libre CC0) et de **RandomUser.me** (API publique).  
> Aucune image locale n'est requise.

---

## Lancer le projet

Aucune installation requise. Ouvrir directement dans un navigateur :

```bash
# Option 1 — ouverture directe
open index.html

# Option 2 — serveur local avec VS Code Live Server
# Clic droit sur index.html → "Open with Live Server"

# Option 3 — serveur Python
python -m http.server 8000
# Puis ouvrir http://localhost:8000
```

---

## Personnalisation

### Changer les couleurs principales

Dans `style.css`, modifier les variables CSS :

```css
:root {
    --gold:    #c6a75e;   /* Couleur accent dorée */
    --magenta: #9b1248;   /* Couleur primaire / CTA */
}
```

### Modifier les slides du hero

Dans `script.js`, éditer le tableau `slides` :

```js
const slides = [
    {
        image: "URL_de_votre_image",
        title: "Votre titre ici",
        subtitle: "Votre sous-titre ici"
    },
    // ...
];
```

### Ajouter une carte au menu

Dans `index.html`, dupliquer un bloc `.menu-card` et ajuster l'attribut `data-cat` :

```html
<div class="menu-card fade-in-up" data-cat="plat">
    <!-- entree | plat | dessert | boisson -->
</div>
```

### Activer l'envoi du formulaire (EmailJS)

1. Créer un compte sur [emailjs.com](https://www.emailjs.com/)
2. Dans `script.js`, remplacer la simulation par :

```js
(function(){ emailjs.init("VOTRE_PUBLIC_KEY"); })();

form.addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm("VOTRE_SERVICE_ID", "VOTRE_TEMPLATE_ID", this)
        .then(() => { status.innerHTML = "Réservation envoyée ✓"; form.reset(); })
        .catch(() => { status.innerHTML = "Erreur lors de l'envoi ✗"; });
});
```

3. Ajouter le script EmailJS dans `index.html` avant la fermeture `</body>` :

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

---

## Mentions légales & droits

| Élément | Source | Licence |
|---|---|---|
| Images de plats & ambiance | [Unsplash](https://unsplash.com) | CC0 — usage libre |
| Avatars témoignages | [RandomUser.me](https://randomuser.me) | API publique |
| Polices | Google Fonts (Cormorant Garamond, DM Sans) | SIL Open Font License |
| Icônes | Font Awesome 6 | Free tier |
| Contenu textuel | Fictif — créé pour ce projet | — |

**Ce site ne constitue pas une activité commerciale réelle.** Aucun service n'est vendu, aucune réservation n'est traitée, aucune donnée personnelle n'est collectée.

---

## Auteur

**Fabrice Houeto** — Développeur Web  
Spécialisé dans la conception de sites modernes, rapides et adaptés aux besoins des entreprises, restaurants et entrepreneurs.

- 📞 [+229 01 91 69 02 92](tel:+2290191690292)
- 💬 [WhatsApp](https://wa.me/22991690292)
- 🌐 [fabrice-services-info.netlify.app](https://fabrice-services-info.netlify.app/)

---

*© 2026 Fabrice Houeto — Projet de démonstration portfolio*
