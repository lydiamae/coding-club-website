const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server listening on port " + port);
    }
});
