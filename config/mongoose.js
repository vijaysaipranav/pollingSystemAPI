const mongoose = require('mongoose');
require('dotenv').config();
// establishing a connection with mongoDB
mongoose.connect(process.env.MONGODBURL);

const db = mongoose.connection;
db.on('error', console.error.bind(console,'Error connecting to db'));
db.once('open',()=>{
    console.log('Connected to MongoDB database')
})

module.exports =db;