const express = require("express");
const app = express();
const path = require("path");
const request = require("requests");
const hbs = require('hbs');
const port = process.env.PORT || 3000
const StaticPath = path.join(__dirname, "../public");
//views path
const template_path = path.join(__dirname, "../templates/views");

//partial path
const partialsPath = path.join(__dirname + '../templates/partials');

app.set("view engine", 'hbs');
app.use(express.static(StaticPath));
app.set('views', template_path);
hbs.registerPartials(partialsPath, function(err) {});
//console.log(partials_path);
//routing
app.get("/", (req, res) => {
    res.render('index');
});
app.get("/about", (req, res) => {
    res.render('about');
});
app.get("/weather", (req, res) => {
    res.render("weathe");
});

app.get("/*", (req, res) => {
    res.status(404).render('404error')
})
app.listen(8000, () => {
    console.log("Server is Staring on port 8000");
})