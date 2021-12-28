const runApp = require("./lib/app");
const { exec } = require("child_process");
const r = require("rethinkdb");
const clearTable = require("./lib/util/clearTable");
// const pLimit = require("p-limit");

// const limit = pLimit(5);

// const functionList = [
//     limit(() => runApp()),
//     limit(() => runApp()),
//     limit(() => runApp()),
//     limit(() => runApp()),
//     limit(() => runApp())
// ];

// Promise.all(functionList).then((res) => console.log(res));
runApp();

process.on("SIGINT", () => {
  console.log("Terminating Script");
  const script =
    "rethinkdb export -e scraperdb.questions --format csv --fields path,referenceCount,upvotes,answers";
  exec(script);
  process.exit();
});
