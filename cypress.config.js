const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
