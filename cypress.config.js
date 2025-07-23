const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationpratice.com.br",
    setupNodeEvents(on, config) {
      mochawesome(on); // Ativando o plugin aqui
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: true,
    json: true
  }
});
