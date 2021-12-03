# Hackathon Showcase

- [Hackathon Showcase](#hackathon-showcase)
  - [Adding a new project](#adding-a-new-project)
  - [Project setup](#project-setup)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Lints and fixes files](#lints-and-fixes-files)

An simple Vue + Tailwind frontend app showcasing previously done hackathon projects. Visit the app on this page: [https://consoledot-hackathon.surge.sh/](https://consoledot-hackathon.surge.sh/).

## Adding a new project

1. All projects are located as javascript files in `src/projects/`. To add a new record, just create a new file with following structure:

```jsx
// Storwars.js
export default {
    name: 'Stor Wars: Not a Star Wars game', // Required
    hackathon: 'August 2021', // Required
    authors: [{ // Required
        name: 'Richard Všianský'
    }, {
        name: 'Karel Hala'
    }],
    link: 'https://github.com/karelhala/stor-wars-hackathon21',
    additionalLinks: [
        {label: 'Play here', link: 'https://karelhala.itch.io/stor-wars'},
        {label: 'Scoreboard', link: 'http://storwars.jecool.net/'},
        {label: 'Trailer', link: 'https://drive.google.com/file/d/1X5IBkufrkVnLoOAiqTnPKcFMcRNpqlbe/view?usp=sharing'}
    ],
    labels: ['Games', 'Fun'], // Required
    description: '2D Top down shooter not based on Star Wars assets with online scoreboard functionality.',
    image: '/StorWars.png'
}
```

Hackathons and labels are generated automatically in the filter selections, you can use whatever you want and the UI will offer these.

You can store images is `public` folder.

2. After adding new files, you have to run `yarn prebuild` to include these projects in the UI.

**On CI this step is being done automatically, so you do not have to run locally.**

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

