const serverless = require("serverless-http");
const express = require("express");
const app = express();
const http = require('http');
const url = require('url');

app.get("/", (req, res, next) => {
console.log(req);
id = 2222;
  return res.status(200).json({
    message: "Hello from root!!!! " + id
  });
});

app.get("/hello", (req, res, next) => {
	console.warn("in /hello");
	console.warn(req);
  return res.status(200).json({
    message: "Hello from path!" + req.query.id,
  });
});

app.get("/mtk2", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from mtk!",
    message2: "Hello from mtk2!",
  });
});

app.use((req, res, next) => {
console.log(req.query.id);
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
