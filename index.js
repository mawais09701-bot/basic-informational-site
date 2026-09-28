const http = require("node:http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./index.html", (err, data) => {
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("./about.html", (err, data) => {
      res.end(data);
    });
  } else if (req.url === "/contact") {
    fs.readFile("./contact-me.html", (err, data) => {
      res.end(data);
    });
  } else {
    fs.readFile("./404.html", (err, data) => {
      res.end(data);
    });
  }
});

server.listen(3000);
