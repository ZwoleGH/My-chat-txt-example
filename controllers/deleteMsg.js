const mongoose=require("mongoose");
const chat=require("../models/chat");


exports.delMsg=async function(req,res){
    console.log("Del çalıştı")
    chat.findOneAndDelete({ _id: req.params.id })
   .exec()
    res.redirect("/adminchat");
  }
  
