const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send('<h1>Homepage</h1>')
});

app.use(`/.netlify/functions/home`, router);

module.exports = app;
module.exports.handler = serverless(app);