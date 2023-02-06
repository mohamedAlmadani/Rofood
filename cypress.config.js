const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7vq3ik",
  
  e2e: {
    baseUrl: "https://pos.rofood.co/login" ,
    viewportWidth: 1440,
    viewportHeight: 900,
    specPattern:'cypress/e2e/all.cy.js',
    experimentalWebKitSupport: true,
    videoUploadOnPasses: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  
});
