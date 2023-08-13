const mongoose=require("mongoose");
const chat=require("../models/chat");

exports.editMsg=async function(req,res){
  chat.findOneAndUpdate({_id: req.body.id}, {name:req.body.name,text:req.body.text}, {new: true}).exec();
  res.redirect("/adminchat");
  }
