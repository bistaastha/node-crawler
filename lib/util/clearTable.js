/**
 * Utility function to clear table data
 */
const clearTable = () => {
  r.connect({ host: "localhost", port: 28015 }).then((conn) => {
    r.db("scraperdb").table("questions").delete().run(conn);
  });
};

module.exports = clearTable;
