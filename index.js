const express = require('express');
const port =8000;
const app = express();
const db = require('./config/mongoose')

app.use(express.json());


// importing routes
app.use('/',require('./routes/index'));



app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`The server is running at ${port}`);
})