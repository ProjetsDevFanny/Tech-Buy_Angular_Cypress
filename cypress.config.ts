const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    testEnvURL: 'https://example.cypress.io',
    baseURL: 'http://localhost:4200/'
  }
});
