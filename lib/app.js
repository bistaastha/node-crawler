const fetchHtmlData = require("./utils/fetchHtmlData");
const url = 'https://stackoverflow.com/questions';

const runApp = () => {
    fetchHtmlData(url).then(() => console.log('Success'));
}

module.exports = runApp;