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
    const paginationPanelLastChild = $(".s-pagination.float-left")
      .children("a")
      .last();
    
    /**
     * Checks if the page that has been reached is the last
     */
    if (paginationPanelLastChild.text().trimLeft() != "Next") {
      return new Promise((resolve, _) => {
        resolve("All pages scraped!");
      });
    }

    const nextLink = $(paginationPanelLastChild).attr("href");
    const nextUrl = baseUrl + nextLink;
    console.log(nextUrl);

    return Promise.map([nextUrl], recursiveCrawlerConcurrent, {concurrency: 5}).then((results) => console.log(results));
  });
};

module.exports = recursiveCrawlerConcurrent;
