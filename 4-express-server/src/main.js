import express from "express";
import cors from "cors";

const app = express();

// http://localhost:3010/1.mp3
app.use(cors());
app.use(express.static("sites"));

app.options("/", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.send("Hello World");
});
app.get("/", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Hello World");
});

const port = 3010;

console.log(`running on http://localhost:${port}/ `);
app.listen(port);
