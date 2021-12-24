const axios = require("axios");
const Promise = require("bluebird");
const cheerioModule = require("cheerio");
const url = "https://stackoverflow.com/questions";

const maxConnections = 5;

const readPage = (url) => {
  return axios(url).then((res) => {
    const data = res.data;
    const $ = cheerio.load(data);
    // $("#questions .question-summary").each((index, element) => {
    //   const voteCount = $(element).find(".vote-count-post strong");
    //   const answerCount = $(element).find(".status strong");
    //   const questionReference = $($(element).find(".question-hyperlink")).attr(
    //     "href"
    //   );
    //   storeInDb();
    //   console.log("Vote Count:" + pretty($(voteCount).html()));
    //   console.log("Answer Count:" + pretty($(answerCount).html()));
    //   console.log("Link: " + questionReference);
    // });

    const links = [];
    return Promise.map(links, readPage, { concurrency: maxConnections }).then(
      (res) => {
          //TODO: handle res
      }
    );
  });
};

scanPage().then((res) => {
  //TODO: handle res
});
