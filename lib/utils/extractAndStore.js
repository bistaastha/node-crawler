const storeInDb = require("../scripts/storeInDb");
const pretty = require('pretty');

const extractAndStore = ($) => {
  $("#questions .question-summary").each((index, element) => {
    const voteCount = $(element).find(".vote-count-post strong");
    const answerCount = $(element).find(".status strong");
    const questionReference = $($(element).find(".question-hyperlink")).attr(
      "href"
    );
    console.log("Vote Count:" + pretty($(voteCount).html()));
    console.log("Answer Count:" + pretty($(answerCount).html()));
    console.log("Link: " + questionReference);
    storeInDb(questionReference, $(voteCount).html(), $(answerCount).html());
  });
};

module.exports = extractAndStore;
