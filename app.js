const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.status(400).send("");
  return;
  res.send("Hola mundo <br>" + "/*******  HASH_DATE *******/" + "_" + "/*******  HASH_ID *******/" )
}); /* abc */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
