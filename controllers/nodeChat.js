const mongoose=require("mongoose");
const chat=require("../models/chat");
     
    exports.home=function(req,res){
      console.log("Ana sayfaya biri girdi");
      console.log(req.body)
      res.render("home",{
        url:"/",
        isLogined:req.session.isLogined,
        activeUser:req.session.activeUser
      });
  }

  exports.textDetails=async function(req,res){
    
    console.log("TextDetail a biri girdi");
    chat.find({_id:req.params.id}).then((result=>{
      res.render("textDetail",{
            yazilar:result,
            dirname:req.hostname,
            url:"/adminchat",
            isLogined:req.session.isLogined,
            activeUser:req.session.activeUser,
            modul:module.exports
          });
    }));
}