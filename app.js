const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hola mundo <br>" + "/*******  HASH_ID *******/" + "/*******  HASH_DATE *******/" )
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); "<aaaaaaaaaaaaaaaaaaaaaaaestrooiaarjoihoisdasdasdrougrhbgr"

