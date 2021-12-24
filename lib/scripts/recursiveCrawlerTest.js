const axios = require("axios");
const Promise = require("bluebird");
const cheerio = require("cheerio");
const extractAndStore = require("../utils/extractAndStore");
const baseUrl = "https://stackoverflow.com";

const maxConnections = 5;

"use strict";

const readPage = (url) => {
  return axios(url).then((res) => {
    const data = res.data;
    const $ = cheerio.load(data);

    extractAndStore($);

    const paginationPanelLastChild = $('.s-pagination.float-left').children('a').last();
    if(paginationPanelLastChild.text().trimLeft() != 'Next') {
    return new Promise((resolve, reject) => {
        resolve('All pages scraped!');
    });}
    const nextLink = $(paginationPanelLastChild).attr('href');
    const nextUrl = baseUrl + nextLink;
    console.log(nextUrl);
    
    readPage(nextUrl);
  });
};

module.exports = readPage;