const mongoose = require('mongoose');
const dotenv=require('dotenv').config();
mongoose.set('strictQuery', false);
// ||'mongodb://localhost/Authentication-Skill-test'
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/Authentication-Skill-test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error In Connect into db"));

db.once('open', function () {
    console.log("Successfully connect to DB");
})

module.exports = db;
