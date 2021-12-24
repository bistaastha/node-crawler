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
    let recordFound = false;

    /**
     * Finds documents with similar referenceLink path as the one information sent in
     * and updates referenceCount
     */
    r.db("test")
      .table("questions")
      .filter({ path: referenceLink })
      .update({
        referenceCount: r.row("referenceCount").add(1),
      })
      .run(conn, (err, res) => {
        recordFound = true;
      });

    /**
     * New record formed if the filter function did not run
     */
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

module.exports = storeUpdate;
