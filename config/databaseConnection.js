/**
 * Configuring a new database.json and exporting its reference object
 */
const jsoning = require('jsoning');
const db = new jsoning("database.json");

module.exports = db;