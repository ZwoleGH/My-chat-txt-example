const messages=require("../message");
var data=new messages();
exports.delMsg=async function(req,res){
    console.log("deneme");
    data.delMsg(2);
    res.redirect("/adminchat/:");
  }
