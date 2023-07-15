const express=require("express");

const qers=require("querystring");

const fs=require("fs");

const router=express.Router();

const url=require("url");

const db=require("../data/db");
const { dir } = require("console");

router.use("/chat",async function(req,res){
  
    try {
    var data=fs.readFileSync("./message.json");
    var myObject = JSON.parse(data);
    if(req.query.deger!=null){
      myObject.push(JSON.parse('{"name":"'+req.query.ad+'","deger":"'+req.query.deger+'"}'));
      var newData2 = JSON.stringify(myObject);
      
      fs.writeFile("./message.json",newData2,(err)=>{
  console.log(err);
    });
  
    }
        res.render("chat",{
          yazilar:myObject,
          dirname:req.hostname,
          db:db,
          modul:module.exports
        });
      } 
      catch(err) {
        console.log(err);
      }
})



router.use("/anasayfa", function(req,res){
    res.render("home");
})


router.use("/", function(req,res){
  res.statusCode=404;
    res.render("404");
})

module.exports=router;


