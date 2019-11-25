const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Ok");
});

app.listen("3000", () => console.log("Running 3000"));
