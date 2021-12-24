const express = require("express");
const port = process.env.PORT || 3000;
const runApp = require("./lib/app");
const url = "https://stackoverflow.com/questions";

const app = express();
app.get("/", (req, res) => {
  runApp();
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});

process.on("SIGINT", () => {
  console.log("caughtInterruptSignal");
  process.exit();
});
