var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8087;
app.listen(PORT, () => console.log("listen up", PORT));
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json({ type: 'application/**json'}))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))
app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

