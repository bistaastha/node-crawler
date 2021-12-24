const storeUpdate = require("./storeUpdate");

const extractAndStore = ($) => {
    let questionInformationList = []
  $("#questions .question-summary").each((_, element) => {
    const voteCount = $(element).find(".vote-count-post strong");
    const answerCount = $(element).find(".status strong");
    const questionReference = $($(element).find(".question-hyperlink")).attr(
      "href"
    );
    //     Logging section
    //     console.log("Vote Count:" + pretty($(voteCount).html()));
    //     console.log("Answer Count:" + pretty($(answerCount).html()));
    //     console.log("Link: " + questionReference);

    storeUpdate(questionReference, $(voteCount).html(), $(answerCount).html());
  });
};

module.exports = extractAndStore;
