const recursiveCrawler = require("./services/recursiveCrawler");
const recursiveCrawlerConcurrent = require("./services/recursiveCrawlerConcurrent");
const baseUrl = "https://stackoverflow.com";

const runApp = async () => recursiveCrawlerConcurrent(baseUrl + "/questions");


module.exports = runApp;