const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://pos.rofood.co/login" ,
    viewportWidth: 1440,
    viewportHeight: 900,
    specPattern:'cypress/e2e/all.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  
});
