const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://57.153.34.40:3000",
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
