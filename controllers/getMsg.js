const mongoose=require("mongoose");
const chat=require("../models/chat");


exports.getText=async function(req,res){
    console.log("Chate biri girdi");
      console.log(req.user)
  
    chat.find().then((result=>{
      res.render("chat",{
            yazilar:result,
            dirname:req.hostname,
            isLogined:req.session.isLogined,
            activeUser:req.session.activeUser,
            url:"/chat",
            modul:module.exports
          });
    }));
        
        } 

        exports.admingetText=async function(req,res){
          if(req.session.activeUser){
            if(!req.session.activeUser.roles[0].admin){
            res.redirect("/login");
            }  
            }  
            console.log("Chate adminle biri girdi");
      
            chat.find().then((result=>{
          res.render("adminchat",{
                yazilar:result,
                dirname:req.hostname,
                isLogined:req.session.isLogined,
                activeUser:req.session.activeUser,
                url:"/adminchat",
                modul:module.exports
              });
        }));
                  } 
      