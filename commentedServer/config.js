// config.js
const dotenv = require("dotenv");
dotenv.config();
// Export env variables
module.exports = {
  API_KEY: process.env.APIKEY,
  API_SECRET: process.env.APISEC,
};