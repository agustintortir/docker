const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hola mundo <br>" + "/*******  HASH_DATE *******/" + "_" + "/*******  HASH_ID *******/" )
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); //asasd

module.exports = app;
