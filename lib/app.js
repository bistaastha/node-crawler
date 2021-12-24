let jsoning = require('jsoning');
let database = new jsoning("database.json");
// const MongoClient = require('mongodb').MongoClient;
// const mongoUrl = 'mongodb://127.0.0.1:27017';
const readPage = require('./scripts/recursiveCrawlerTest');
const baseUrl = "https://stackoverflow.com";

const runApp = async () => {
    readPage(baseUrl + '/questions', database);
}

module.exports = runApp;