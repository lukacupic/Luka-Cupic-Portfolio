const express = require("express");
const path = require("path");
const { exec } = require("child_process");

const app = express();
const port = 8092;

const publicDir = path.join(__dirname, "public");
const pagesDir = path.join(publicDir, "pages");

app.use(express.static(publicDir));

app.get("/", function (req, res) {
  res.sendFile(path.join(pagesDir, "index.html"));
});

app.get("/portfolio", function (req, res) {
  res.sendFile(path.join(pagesDir, "portfolio.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(pagesDir, "about.html"));
});

app.post("/githubwebhook", (req, res) => {
  exec("npm run deploy", (error, stdout, stderr) => {
    if (error || stderr) {
      // TODO
    }
  });

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`lukacupic server running at ${port}`);
});
