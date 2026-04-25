# Travaux Pratiques - Développement Web

<div align="center">

![Web Development](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm44cTZnY3h3MzJkeG5mbjBvcmdtcnVtdGFmNm51bzNubjBoZDl6MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ws6T5PN7wHv3cY8xy8/giphy.gif)

</div>

> Une collection professionnelle de travaux pratiques et exercices en développement web, couvrant HTML, CSS, JavaScript et les frameworks modernes.

---

## À propos

Ce repository contient une série de projets pédagogiques et matériaux d'apprentissage élaborés durant les études en développement web. Il représente un parcours structuré explorant les fondamentaux jusqu'aux technologies contemporaines.

### Badges

![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-En%20cours-4a90e2?style=flat-square)

---

## Structure du Projet

```text
travaux-pratiques-dev-web/
├── TP_1/              Fondamentaux HTML (Portfolio/CV Bugshadow)
├── TP_2/              CSS & Mise en page (Formulaire Inscription complet)
├── TP_3/              JavaScript & Interactivité (Site de l'Agence GPM)
├── TP_4/              CSS Moderne & Layouts (Sélecteurs, Grid, Flex, Responsive)
├── TP_JS/             Exercices JavaScript - Manipulation du DOM
├── TP_HTTP/           Protocole HTTP - Théorie, cURL, Fetch et Sécurité
├── Exercice_HTTP/     Client HTTP interactif type "Postman"
└── README.md          Documentation
```

---

## Technologies Utilisées

| Technologie | Description |
|-------------|-------------|
| **HTML5** | Structure et sémantique web moderne |
| **CSS3** | Mise en page, flexbox, grid, animations avancées |
| **JavaScript** | Programmation côté client et DOM manipulation |
| **Frameworks Modernes** | React, Vue, et autres technologies contemporaines |

---

## Contenus des Travaux Pratiques

### [TP 1 - Fondamentaux HTML : Portfolio Personnel](./TP_1/index.html)

**Objectif :** Création d'un site CV en ligne pour apprendre à structurer l'information.
- **Contenu et réalisation :** Structure d'un portfolio pour "Bugshadow" avec des sections sémantiques. Présence d'une page avec résumé "À propos", des barres de "Compétences" en pourcentage, le détail de la "Formation" sous forme d'une table HTML propre, et les réseaux sociaux en section "Contact".
- **Spécificités techniques :** Utilisation intensive des balises sémantiques (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`), et des attributs de type `aria` pour assurer l'accessibilité.

**Technologies :** HTML5, Sémantique Web, Accessibilité

### [TP 2 - Stylisation & CSS : Formulaire d'Inscription](./TP_2/index.html)

**Objectif :** Conception d'un formulaire avancé entièrement responsif incluant la validation en un fichier unique.
- **Contenu et réalisation :** Interface d'authentification professionnelle. Création de champs de saisies de données structurés : textuels obligatoires, liste déroulante et `datalist` pour les pays, boutons radios pour le genre, et cases multiples pour centres d'intérêts. Gestion de la confirmation de mots de passe.
- **Spécificités techniques :** Dépliage HTML5 (attributs tels que `required`, `pattern`, `minlength`, `max`), stylisation via Flexbox/Grid CSS3, gestion dynamique de l'état asynchrone pour la validité via un script DOM JavaScript intégré.

**Technologies :** CSS3, Flexbox/Grid, Formulaires HTML5, Responsive Design, Validation JS native

### [TP 3 - Interactivité & JavaScript : Site Agence Digitale "GPM"](./TP_3/index.html)

**Objectif :** Déploiement d'un Layout moderne représentant un véritable site vitrine professionnel d'une agence Web.
- **Contenu et réalisation :** Implémentation d'une page d'accueil d'une agence digitale avec un visuel immersif (Hero Banner en positionnement CSS). Structuration des composants majeurs tels que : les cartes "Services", les blockquotes "Témoignages", le footer fractionné, et une structure extensible (`/pages/about.html`, etc.). 
- **Spécificités techniques :** Design UI/UX poussé par le réglage optimal des variables CSS (`--bg`, `--surface`, `--accent`), imbrication des overlays, effets d'ombres portées et dégradés élégants.

**Technologies :** JavaScript ES6+, Variables CSS Avancées, Manipulations de layout esthétiques complexes.

### [TP 4 - CSS Moderne & Layouts : Maîtrise Visuelle](./TP_4/index.html)

**Objectif :** Approfondissement des concepts CSS3 avancés pour la création d'interfaces robustes et adaptatives.
- **Contenu et réalisation :** Suite de 8 modules pratiques traitant : la hiérarchie des sélecteurs, la gestion précise des dimensions (Box Model), les alignements complexes via Flexbox, la structuration de pages par CSS Grid Areas, et l'intégration d'animations fluides. Inclut un quiz de révision complet.
- **Spécificités techniques :** Mise en œuvre de la méthodologie *Mobile First* (`min-width`), exploitation des unités fractionnaires (`1fr`), et mise en place d'un système de thèmes dynamiques par variables CSS. Design épuré respectant une palette "terracotta" professionnelle.

**Technologies :** CSS3 Modern, Flexbox, CSS Grid, Responsive Design, Animations @keyframes, Variables CSS.

### [TP JS - Exercices JavaScript : Manipulation du DOM](./TP_JS/exercices.html)

**Objectif :** Maîtriser les interactions avec le DOM en Vanilla JS.
- **Contenu et réalisation :** 10 exercices progressifs sur une même page axés sur les manipulations textuelles, la gestion dynamique de classes, la création de listes To-Do, et les compteurs avec conditions.
- **Spécificités techniques :** Utilisation des fonctions JavaScript `querySelector`, `classList`, `innerHTML`, gestion d'événements (`onclick`, `onkeyup`), manipulation de styles CSS inline avec conditions.

**Technologies :** Vanilla JavaScript, DOM manipulations, Événements.

### [TP HTTP - Le Protocole HTTP & Sécurité](./TP_HTTP/index.html)

**Objectif :** Comprendre l'architecture d'Internet et la sécurisation des requêtes HTTP.
- **Contenu et réalisation :** Comptes-rendus interactifs sur les DevTools, l'historique des requêtes cURL, et utilisation avancée de l'API Fetch. Analyse des statuts (200, 404, 500) et comportements des requêtes (redirections 301).
- **Spécificités techniques :** Outils de tests interactifs intégrés à la page pour lancer des appels Fetch réels avec gestion des erreurs asynchrones (`async`/`await`). Analyse automatique des E-Tags, headers CSP et X-Frame-Options d'un site.

**Technologies :** Protocole HTTP, cURL, API Fetch, Headers (HSTS, CSP), Gestion d'erreurs.

### [Exercice HTTP - Client HTTP (Type Postman)](./Exercice_HTTP/index.html)

**Objectif :** Concevoir une interface graphique personnalisée pour interagir avec des API (Client REST).
- **Contenu et réalisation :** Développement complet d'un mini-outil de test réseau permettant de spécifier des URLs, la méthode d'envoi (GET, POST, PUT, DELETE), avec envoi optionnel de headers personnalisés (Clé/Valeur) et support d'un Body (JSON).
- **Spécificités techniques :** Contrôle asynchrone complet avec `XMLHttpRequest`, traitement à la volée de codes de réponse (status), extraction de toutes les entêtes (`getAllResponseHeaders()`) et affichage structuré des résultats JSON textuels grâce au DOM dynamique.

**Technologies :** XMLHTTPRequest (AJAX), DOM Dynamique, JavaScript Vanilla.

---

## Objectifs d'Apprentissage

- Maîtriser les fondamentaux du développement web moderne
- Créer des interfaces responsives et ergonomiques
- Développer des applications web interactives et dynamiques
- Utiliser efficacement les frameworks et outils contemporains
- Appliquer les standards et bonnes pratiques de l'industrie

---

## Guide d'Utilisation

1. **Explorer** les différents travaux pratiques pour comprendre la progression de HTML à CSS et JS
2. **Ouvrir** les fichiers nommés `index.html` (au sein de chaque sous-dossier TP) directement dans votre navigateur préféré
3. **Étudier** les codes sources, l'usage des balises `aria` et la validation du DOM
4. **Expérimenter** en modifiant le code et les variables de couleurs pour approfondir votre compréhension
5. **Documenter** vos apprentissages et observations

---

## Points Importants

- Chaque TP fonctionne de façon indépendante avec la capacité d'être affiché instantanément
- Les concepts s'approfondissent progressivement d'un TP à l'autre (ajout de design CSS en TP2, de structure multi-pages en TP3)
- Le code est bien formaté pour faciliter la lecture professionnelle
- Les bonnes pratiques (comme W3C et accessibilité ARIA) sont intégrées dans chaque projet

---

## Ressources Supplémentaires

Pour approfondir vos connaissances, consultez :
- [Documentation MDN Web Docs](https://developer.mozilla.org/fr/)
- [Spécifications officielles du W3C](https://www.w3.org/)
- [Guides CSS-Tricks Flexbox & Grid](https://css-tricks.com/)

---

<div align="center">

![celebrate](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjd5dHM2c3huZXA5bHFkbHRuZWNjYnNiOGJ3Mm9nN2k4bWpvZ3pkaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbDqmJbxaeYCoM92Ow/giphy.gif)

**Projet créé dans le cadre du cursus en développement web**

Dernière mise à jour: avril 2026
<center>ALL IS GOOD</center>
</div>
