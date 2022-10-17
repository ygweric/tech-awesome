import express from "express";

const app = express();

app.options("/", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.send("Hello World");
});
app.get("/", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Hello World");
});

app.listen(3010);
