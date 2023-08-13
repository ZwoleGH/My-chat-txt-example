const mongoose=require("mongoose");
const chat=require("../models/chat");
     
    exports.sendText=async function(req,res){
      console.log("Biri birşey gönderdi");
      var activeUser=req.session.activeUser;
      const info=new chat({
        name:activeUser.name,
        text:req.body.deger,
        mail:activeUser.email
    })
    info.save();
    res.redirect("/chat");
        
      }
    exports.adminsendText=async function(req,res){
      console.log("Biri adminle birşey gönderdi");
      
      const info=new chat({
        name:req.body.ad,
        text:req.body.deger,
        mail:req.body.email
    })
    res.redirect("/adminchat");
    info.save();
        }