const mongoose = require('mongoose');
// schema for options
const optionSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    },
   votes:{
    type:Number,
   },
   link_to_vote:{
    type:String,
},
});

const Option = mongoose.model('Option', optionSchema);

module.exports= Option;