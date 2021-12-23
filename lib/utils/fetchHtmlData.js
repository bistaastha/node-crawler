const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');

/**
 * 
 * @param {string} url 
 */
const fetchHtmlData = async (url) => {
    fetchData(url, 1).then((res) => {
        const html = res.data;
        const $ = cheerio.load(html);
        $('#questions .question-summary').each((index, element) => {
            const voteCount = $(element).find('.vote-count-post strong');
            const answerCount = $(element).find('.status strong');
            const questionReference = $($(element).find('.question-hyperlink')).attr('href');
            console.log('Vote Count:' + pretty($(voteCount).html()));
            console.log('Answer Count:' + pretty($(answerCount).html()));
            console.log('Link: ' + questionReference);
        });
    });
}

const fetchData = async (url, pageNumber) => {
    console.log('Starting Crawler...');
    const params = new URLSearchParams([['page', pageNumber]]);
    let response = await axios.get(url, {params}).catch((err) => console.log(err));

    if(response.status !== 200){
        console.log('Error: Data not fetched');
        return;
    }
    return response;
}

module.exports = fetchHtmlData;