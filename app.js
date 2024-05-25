const express = require("express");
const path = require("path");
const { exec } = require("child_process");

const app = express();
const port = 8092;

const publicDir = path.join(__dirname, "public");
const pagesDir = path.join(publicDir, "pages");

app.use(express.static(publicDir));

app.get("/", function (req, res) {
  res.sendFile(path.join(pagesDir, "wip.html"));
});

app.listen(port, () => {
  console.log(`lukacupic server running at ${port}`);
});
