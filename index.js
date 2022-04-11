require('dotenv').config();
const express = require('express');
const routes = require('./src/router')

require('./src/configs/mongoDB')();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`serevr is connected to port : ${PORT}`);
});


