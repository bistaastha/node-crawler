const runApp = require("./lib/runApp");
const { exec } = require("child_process");

runApp();

process.on("SIGINT", () => {
  console.log("Terminating Script");
  const script =
    "rethinkdb export -e scraperdb.questions --format csv --fields path,referenceCount,upvotes,answers";
  exec(script);
  process.exit();
});
