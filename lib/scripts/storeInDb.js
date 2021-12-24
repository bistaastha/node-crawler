r = require("rethinkdb");
const fs = require("fs");
let connection = null;

const storeInDb = async (referenceLink, voteCount, answerCount) => {
  r.connect({ host: "localhost", port: 28015 }).then((conn) => {
    r.db("scraperdb")
      .table("questions")
      .insert({ path: referenceLink, referenceCount: 0, upvotes: +voteCount, answers: +answerCount })
      .run(conn);
    fs.op
  });
};

module.exports = storeInDb;
