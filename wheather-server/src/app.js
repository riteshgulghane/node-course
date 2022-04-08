const getWheatherAt = require('../../utils/main')
const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const publicDirPath = path.join(__dirname, '../public');
const viewDirPath = path.join(__dirname, '../templates/views');
const partialDirPath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partialDirPath);

app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewDirPath);

app.get('', (req, res) => {
    res.render('index', {
        title: "Wheather",
        description: "home description",
        author: "Ritesh"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        description: "help description",
        author: "Ritesh"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        description: "about description",
        author: "Ritesh"
    })
})

app.get('/wheather', async (req, res) => {
    if (!req.query.address)
        res.send({
            error: "Please check for address"
        })
    getWheatherAt(req.query.address, data => {
        res.json(data);
    });

})

app.listen(3000, () => {
    console.log("hey Ritesh");
    console.log("server is running on 3000.");
})