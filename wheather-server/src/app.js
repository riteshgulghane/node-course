const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const publicDirPath = path.join(__dirname, '../public');
const viewDirPath = path.join(__dirname, '../templates/views');
const partialDirPath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partialDirPath);

// app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewDirPath);

app.get('', (req, res) => {
    res.render('index')
})

app.get('/help', (req, res) => {
    res.render('help')
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "about Page hoy n",
        description: "about description"
    })
})

app.listen(3000, () => {
    console.log("hey Ritesh");
    console.log("server is running on 3000.");

})

