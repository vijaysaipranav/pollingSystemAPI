const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/polling_api_db',{useNewUrlParser:true,useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'Error connecting to db'));
db.once('open',()=>{
    console.log('Connected to MongoDB database')
})

module.exports =db;