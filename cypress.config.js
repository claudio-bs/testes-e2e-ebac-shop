const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dye9sc',
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/", setupNodeEvents(on, config) {
    },
    //reporter: "mochawesome"
    reporter: "junit"
  }
});