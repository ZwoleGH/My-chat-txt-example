
const messages=require("../message");


exports.getText=async function(req,res){
  
    var myObject = messages.getAll();
    
      res.render("chat",{
          yazilar:myObject,
          dirname:req.hostname,
          modul:module.exports
        });
      } 
      
    exports.sendText=async function(req,res){
      
      
      var data=new messages(0,req.body.ad,req.body.deger);
      data.saveMessages();
    res.redirect("/chat");
        
      }
    exports.adminsendText=async function(req,res){
      
      
        var data=new messages(req.body.id,req.body.ad,req.body.deger);
        data.saveMessages();
      res.redirect("/adminchat");
          
        }
    exports.admingetText=async function(req,res){
  
          var myObject = messages.getAll();
          
            res.render("adminchat",{
                yazilar:myObject,
                dirname:req.hostname,
                modul:module.exports
              });
            } 

    exports.home=function(req,res){
      res.render("home");
  }

  exports.textDetails=function(req,res){
    var myObject = messages.getAll();
    console.log(myObject.getById(req.params.id));
    res.render("textDetail",{
      yazi:req.params.id
    });
}