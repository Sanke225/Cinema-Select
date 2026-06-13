# Application de Cinéma React

Cette application permet de gérer votre collection de films avec React et Tailwind CSS.

## Fonctionnalités

- Affichage des films en grille
- Filtrage par titre
- Filtrage par note minimale
- Ajout de nouveaux films

## Commandes disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Lance l'application en mode développement.
Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans votre navigateur.

La page se rechargera automatiquement quand vous ferez des modifications.

### `npm test`

Lance les tests en mode interactif.

### `npm run build`

Crée une version de production de l'application dans le dossier `build`.
Cette version est optimisée pour les meilleures performances.

## Structure du projet

```
src/
├── App.js                      Composant principal
├── components/
│   ├── MovieCard.js           Carte d'affichage d'un film
│   ├── MovieList.js           Liste des films en grille
│   ├── Filtre.js              Composant de filtrage
│   └── AjouterFilm.js         Formulaire d'ajout de film
└── index.css                   Styles avec Tailwind CSS
```

## Technologies utilisées

- React avec Hooks
- Tailwind CSS pour le design
- Create React App comme base

## Comment utiliser

1. Lancer l'application avec `npm start`
2. Utiliser les filtres pour rechercher des films
3. Cliquer sur "Ajouter un nouveau film" pour ajouter un film
4. Remplir le formulaire avec titre, description, URL du poster et note
