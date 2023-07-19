const Question = require('../models/questions');
const Option = require('../models/options');

// this function is used to create a new Question
module.exports.create = async(req,res)=>{
    try{
        await Question.create({
            tittle:req.body.tittle,
        })
        res.status(201).json({
            message:"success",
        })
    }catch(err){
        res.status(400).json({"error":err.message});
    }
}
// this function is used to display a Question
module.exports.display = async(req,res)=>{
    const questions = await Question.findById(req.params.id)
    .sort('-createdAt')
    .populate({
        path:'options',
        select:['text','votes','link_to_vote'],
    })
    res.status(200).json({
        Questions:questions,
    })
}
// this function is used to destroy Question
module.exports.destroy = async(req,res)=>{
    try{
        const question = await Question.findById(req.params.id);
        await Question.deleteOne();
       
        await Option.deleteMany({question:req.params.id});
        res.status(201).json({
            message:"success",
        })
    }catch(err){
         res.status(400).json({"error":err.message});
    }
   
}
module.exports.displayAll = async(req,res)=>{
    const questions = await Question.findMany()
    .sort('-createdAt')
    .populate({
        path:'options',
        select:['text','votes','link_to_vote'],
    })
    res.status(200).json({
        Questions:questions,
    })
}

