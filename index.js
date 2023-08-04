require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("this is a minimum express server");
});

app.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`);
});
