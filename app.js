const express = require("express");
const path = require("path");
const { exec } = require("child_process");

const app = express();
const port = 8092;

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.post("/githubwebhook", (req, res) => {
  exec("npm run update", (error, stdout, stderr) => {
    if (error || stderr) {
      // TODO
    }
  });

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`lukacupic server running at ${port}`);
});
