r = require("rethinkdb");

const storeInDb = async (referenceLink, voteCount, answerCount) => {
  r.connect({ host: "localhost", port: 28015 }).then((conn) => {
    let recordFound = false;
    r.db("scraperdb")
      .table("questions")
      .filter({ path: referenceLink })
      .update({
        referenceCount: r.row("referenceCount").add(1),
      })
      .run(conn, (err, res) => {
        recordFound = true;
      });

    if (!recordFound) {
      r.db("scraperdb")
        .table("questions")
        .insert({
          path: referenceLink,
          referenceCount: 1,
          upvotes: +voteCount,
          answers: +answerCount,
        })
        .run(conn);
    }
  });
};

module.exports = storeInDb;
