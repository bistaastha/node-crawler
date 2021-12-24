const cheerio = require('cheerio');
const pretty = require('pretty');
const fetchHtmlData = require('./fetchHtmlData');

/**
 * Returns the maximum page number
 * @param {*} url 
 */
const getPageRange = async (url) => {
    let html;
    await fetchHtmlData(url, 1)
    .then((data) => {
        html = data;
        console.log('Success');
    });

    const $ = cheerio.load(html);
    const paginationPanel = $('.s-pagination.float-left');
    console.log(pretty($(paginationPanel).html()));
    const allElements = $(paginationPanel).children('a');
    const maxPageNumerElement = +$(allElements[allElements.length - 2]).html();
    console.log(maxPageNumerElement);
    return maxPageNumerElement;
}

module.exports = getPageRange;