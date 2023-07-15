const fs=require("fs");



exports.getText=async function(req,res){
  var data=fs.readFileSync("./message.json");
    var myObject = JSON.parse(data);
    
      res.render("chat",{
          yazilar:myObject,
          dirname:req.hostname,
          modul:module.exports
        });
      } 
      
    exports.sendText=async function(req,res){
      var data=fs.readFileSync("./message.json");
      var myObject = JSON.parse(data);
      
        myObject.push(JSON.parse('{"name":"'+req.body.ad+'","deger":"'+req.body.deger+'"}'));
        var newData2 = JSON.stringify(myObject);
        
        fs.writeFile("./message.json",newData2,(err)=>{
    console.log(err);});
    res.redirect("/chat");
        
      }

    exports.home=function(req,res){
      res.render("home");
  }
