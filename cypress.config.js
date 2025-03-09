const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://zenpaysitngapw.zenbyzenith.com:3001/",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
      config.env = {
        ...config.env,
        ...process.env
      };
      return config;
    },
  },
});
