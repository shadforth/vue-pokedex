# Vue Pokédex [![Maintainability](https://api.codeclimate.com/v1/badges/fb4793225019f84f2383/maintainability)](https://codeclimate.com/github/shadforth/vue-pokedex/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/fb4793225019f84f2383/test_coverage)](https://codeclimate.com/github/shadforth/vue-pokedex/test_coverage) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/shadforth/vue-pokedex/issues)

A Pokédex made for fun in Vue.js.

View live at: https://shadforth.github.io/vue-pokedex

The Pokédex includes the first 251 Pokémon, with:

- Descriptions and types
- Base statistics
- Special attacks
- Evolutionary forms
- Audio samples

<img src="screenshot_v2.png" alt="Vue Pokédex" style="max-width:65%;margin: 0 auto;">

## Getting Started

### Prerequisites

- Node.js &amp; npm

To download Node.js and npm, visit the [Node.js downloads page](https://nodejs.org/en/download/) and select the version labelled **LTS**.

After installing Node.js, run the following command to verify that everything has been installed correctly.

```bash
npm -v && node -v
```

### Running the application

```bash
# Download project dependencies
npm install

# Run the application on localhost:8080
npm run serve
```

### Key files and folders

```
  .
  ├── docs/              # Compiled application for GitHub Pages
  ├── public/            # Static assets
  ├── src/               # Main Vue application files
  |   ├── assets/        # Audio, sprites, global CSS
  |   |   └── ...
  |   ├── components/    # Vue components
  |   ├── json/
  |   |   └── data.json  # Scraped Pokédex data
  |   ├── App.vue
  |   ├── event-bus.js   # Connector to pass data b/n children
  |   └── tests/         # Unit tests
  ├── README.md
  └── package.json       # Requirements for npm installation
```

## To do

- [x] Deploy to GitHub Pages
- [x] Set up unit tests
- [ ] Set up e2e tests
- [ ] Add the remaining 551 Pokémon
- [ ] Add strengths and weaknesses
- [ ] Add evolutionary requirements (i.e. Moon Stone, etc.)

## Contributions

All contributions welcome. 😃

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [Veekun](https://veekun.com/dex/downloads) - Pokémon sprites, icons, and audio
- [BrunnerLivio](https://github.com/BrunnerLivio) - Pokémon JSON data
