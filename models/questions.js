const mongoose = require('mongoose');
// schema for questions
const questionSchema = new mongoose.Schema({
    tittle:{
        type:String,
        required:true,
    },
    options:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Option',
    }]

});

const Question = mongoose.model('Question',questionSchema);

module.exports = Question;