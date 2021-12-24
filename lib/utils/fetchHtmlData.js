const fetchData = require('./fetchData');
/**
 * 
 * @param {string} url 
 */
const fetchHtmlData = async (url, pageNumber) => {
    let data;
    await fetchData(url, pageNumber).then((res) => {
        /*
        const $ = cheerio.load(html);
        $('#questions .question-summary').each((index, element) => {
            const voteCount = $(element).find('.vote-count-post strong');
            const answerCount = $(element).find('.status strong');
            const questionReference = $($(element).find('.question-hyperlink')).attr('href');
            console.log('Vote Count:' + pretty($(voteCount).html()));
            console.log('Answer Count:' + pretty($(answerCount).html()));
            console.log('Link: ' + questionReference);
        });*/
        data = res.data;
    });
    return data;
}

module.exports = fetchHtmlData;