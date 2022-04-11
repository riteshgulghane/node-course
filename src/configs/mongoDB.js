const mongoose = require('mongoose');

const mongoUrl = process.env.mongoDBUrl;
// const mongoUrl = 'mongodb+srv://kiranashop:kiranashop@cluster0.gsf6i.mongodb.net/kiranashop?retryWrites=true&w=majority';

const connectDB = async () => {
    const connection = await mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(`mongoDB connected : ${connection.connection.host}`)
}

module.exports = connectDB;

