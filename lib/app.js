const recursiveCrawler = require("./services/recursiveCrawler");
const baseUrl = "https://stackoverflow.com";

const runApp = async () => {
    recursiveCrawler(baseUrl + "/questions");
}

module.exports = runApp;