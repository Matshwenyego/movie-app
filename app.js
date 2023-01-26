const express = require("express");
const path = require("path");
const http = require("http");
const axios = require("axios");

const app = express();

require("dotenv").config();
const omdbApiKey = process.env.OMDB_API_KEY;

app.use(express.static(path.join(__dirname, "public")));
app.get("/hello", function (req, res) {
  res.send("hello");
});
app.get("/movies", async function (req, res) {
  const { s } = req.query;
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${s}&apikey=${omdbApiKey}`
    );
    res.send(data);
  } catch (error) {
    return res.status(400).send({ error: error });
  }
});
app.get("/", function (req, res) {
  return res.sendFile(path.join(__dirname, "build", "index.html"));
});
const port = process.env.PORT || "8080";

app.set("port", port);
const server = http.createServer(app);
server.listen(port);
server.on("listening", () => {
  console.log("Listening on " + port);
});
