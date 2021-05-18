const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + "./index.html");
});
 

const listener = app.listen(80, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
