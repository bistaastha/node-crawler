r = require("rethinkdb");

/**
 * Connects to and updates the database
 * @param {string} referenceLink href extracted from the selected question anchor
 * @param {number} voteCount count of upvotes
 * @param {number} answerCount count of answers
 * @async
 */
const storeUpdate = async (referenceLink, voteCount, answerCount) => {
  r.connect({ host: "localhost", port: 28015 }).then((conn) => {
    /**
     * Finds documents with similar referenceLink path as the one information sent in
     * and updates referenceCount, upvotes and answers
     */
    r.db("scraperdb")
      .table("questions")
      .filter({ path: referenceLink })
      .update({
        referenceCount: r.row("referenceCount").add(1),
        upvotes: +voteCount,
        answers: +answerCount,
      })
      .run(conn, (_, res) => {
        if (res.replaced === 0) {
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
  });
};

module.exports = storeUpdate;
