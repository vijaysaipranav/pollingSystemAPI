const mongoose = require('mongoose');
const Option = require('../models/options');
const Question = require('../models/questions');



module.exports.create = async(req,res)=>{
    try{
        const question = await Question.findById(req.params.id);
        if(question){
            const option = await Option.create({
                text: req.body.text,
                votes:0,
                question:req.params.id,
            })
       
        if (option){
            question.options.push(option);
            
            option.link_to_vote = `http://localhost:8000/options/${option.id}/add_vote`;
            option.save();
            question.save();
        }
    }
        res.status(200).json({message:"success"});
    }catch(err){
        res.status(400).json({"error":err.message});
    }
}
module.exports.addVote = async(req,res)=>{
   try{
    const option = await Option.findById(req.params.id);
    option.votes +=1;
    option.save();
    res.status(200).json({
        message: "success"
    })
   }catch(err){
    res.status(400).json({"error":err.message});
   }
}
module.exports.destroy = async(req,res)=>{
    try{
        const option = await Option.findById(req.params.id);
        const questionId = option.question;
        option.deleteOne();
        await Question.findByIdAndUpdate(questionId,{$pull:{options:req.params.id}});


        res.status(200).json({message:"success"});
    }catch(err){
        res.status(400).json({"error":err.message});
    }
}