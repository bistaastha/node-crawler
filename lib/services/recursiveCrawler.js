const axios = require("axios");
const { resolve, reject } = require("bluebird");
const Promise = require("bluebird");
const cheerio = require("cheerio");
const extractAndStore = require("./extractAndStore");
const baseUrl = "https://stackoverflow.com";

/**
 * Recursively crawls the given web page
 * @param {string} url url to be scraped
 */
const recursiveCrawler = async (url) => {
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
    let paginationPanelLastChild = $(".s-pagination.site1.themed.float-left")
      .children("a")
      .last();

    if ($(paginationPanelLastChild).text().trimLeft() != "Next") {
      return Promise((resolve, _) => {
        resolve("All pages crawled!");
      });
    }
    const nextLink = $(paginationPanelLastChild).attr("href");
    const nextUrl = baseUrl + nextLink;
    console.log("Next URL: ", nextUrl);

    recursiveCrawler(nextUrl);
  });
};

module.exports = recursiveCrawler;
