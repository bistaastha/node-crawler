/**
 * Utility function to create table
 */
const createTable = () => {
  r.connect({ host: "localhost", port: 28015 }).then((conn) => {
    r.db("scraperdb").tableCreate("questions").run(conn);
  });
};

module.exports = createTable;
