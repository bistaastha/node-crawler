const runApp = require("./lib/app");
const { exec } = require('child_process');
const r = require("rethinkdb");
runApp();

process.on("SIGINT", () => {
  console.log("caughtInterruptSignal");
  const script = 'rethinkdb export -e scraperdb.questions --format csv --fields path,referenceCount,upvotes,answers';
  exec(script);
  process.exit();
});
