const axios = require("axios");
const Promise = require("bluebird");
const cheerio = require("cheerio");
const extractAndStore = require("./extractAndStore");
const baseUrl = "https://stackoverflow.com";

/**
 * Recursive crawls the given web page
 * @param {string} url url to be scraped
 */
const recursiveCrawlerConcurrent = async (url) => {
  return axios(url).then((res) => {
    const data = res.data;
    const $ = cheerio.load(data);

    /**
     * Extracts required information from loaded page data
     */
    extractAndStore($);

    /**
     * Stores last child of pagnination panel, denoting next link to be visited
     */
    let paginationPanel = $(".s-pagination.float-left")
      .children("a");
    
    /**
     * Checks if the page that has been reached is the last
     */

    let pageLinks = new Set();
    for(const anchor of paginationPanel) {
      pageLinks.add(baseUrl + $(anchor).attr("href"));
    }

    console.log(url);
    let nextPageLinks = Array.from(pageLinks);
    return Promise.map(nextPageLinks, recursiveCrawlerConcurrent, {concurrency: 5});
  });
};

module.exports = recursiveCrawlerConcurrent;
