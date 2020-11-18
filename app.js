var express = require("express");
var app = express();
var packageJson = require('./package.json');

console.log(process.env.MY_VARIABLE);
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
app.get("/version", (req, res, next) => {
    res.json( {"myapplication": [
        {
        "version": packageJson.version,
        "lastcommitsha": process.env.COMMIT_SHA,
        "description" : "pre-interview technical test"
        }
        ]});
   });


