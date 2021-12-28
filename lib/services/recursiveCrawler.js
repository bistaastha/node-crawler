const axios = require("axios");
const Promise = require("bluebird");
const cheerio = require("cheerio");
const extractAndStore = require("./extractAndStore");
const baseUrl = "https://stackoverflow.com";

/**
 * Recursive crawls the given web page
 * @param {string} url url to be scraped
 */
const recursiveCrawler = async (url) => {
  axios(url).then((res) => {
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
      .children("a").last();
    const nextLink = $(paginationPanelLastChild).attr("href");
    const nextUrl = baseUrl + nextLink;
    console.log("Next URL", nextUrl);

    recursiveCrawler(nextUrl);
  });
};

module.exports = recursiveCrawler;
