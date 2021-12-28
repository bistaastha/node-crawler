const recursiveCrawler = require("./services/recursiveCrawler");
const baseUrl = "https://stackoverflow.com";
const concurrency = 5;
const pLimit = require("p-limit");
const limit = pLimit(5);
const Promise = require("bluebird");

const runApp = async () => {
    //recursiveCrawler(baseUrl + "/questions");

    let promises = [];
    for(let i = 0; i < concurrency; i++) {
        promises.push(limit(() => recursiveCrawler(baseUrl + "/questions")));
    }

    Promise.all(promises);
}

module.exports = runApp;