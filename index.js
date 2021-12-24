const express = require("express");
const port = process.env.PORT || 3000;
const runApp = require("./lib/app");
const readPage = require('./lib/scripts/recursiveCrawlerTest');
const baseUrl = "https://stackoverflow.com";

runApp();

process.on("SIGINT", () => {
  console.log("caughtInterruptSignal");
  process.exit();
});
