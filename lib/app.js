const url = 'https://stackoverflow.com/questions';
const fetchHtmlData = require('./utils/fetchHtmlData');
const getPageRange = require('./utils/getPageRange');

const runApp = async () => {
    const maxPageNumber = await getPageRange(url);

    for(const pageNumber in maxPageNumber) {
        fetchHtmlData(url, pageNumber);
    }
}

module.exports = runApp;