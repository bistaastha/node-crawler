const runApp = require("./lib/app");
const { exec } = require("child_process");
const r = require("rethinkdb");
const pLimit = require("p-limit");
const limit = pLimit(1);

//functionList = [runApp(), runAp]
//Promise.all(functionList).then((res) => console.log(res));
//console.log(typeof runApp());
runApp();
process.on("SIGINT", () => {
  console.log("caughtInterruptSignal");
  const script =
    "rethinkdb export -e scraperdb.questions --format csv --fields path,referenceCount,upvotes,answers";
  exec(script);
  process.exit();
});
