const mongoose=require("mongoose");
const hasher=require("bcrypt");
const User=require("../models/user");
const chat=require("../models/chat");

exports.getregister=async function(req,res){
        res.render("register",{
        dirname:req.hostname,
        url:"/register",
        isLogined:req.session.isLogined,
        activeUser:req.session.activeUser,
        modul:module.exports
      });
  }
exports.getlogin=async function(req,res){
  res.render("login",{
    dirname:req.hostname,
    url:"/login",
    isLogined:req.session.isLogined,
    activeUser:req.session.activeUser,
    modul:module.exports
  });
}
exports.getresetpassword=async function(req,res){
  res.render("resetpassword",{
    dirname:req.hostname,
    url:"/resetpassword",
    isLogined:req.session.isLogined,
    activeUser:req.session.activeUser,
    modul:module.exports
  });
}


exports.postregister=async function(req,res){
  const name=req.body.name;
  const email=req.body.mail;
  var password;
  hasher.hash(req.body.password,10).then(hashedpassword=>{
    password=hashedpassword;
  })
  
  User.findOne({email:email}).then(user=>{
    if(!user){
      user=new User({name:name,email:email,password:password,roles:[{admin:false,user:true}]});
      console.log("yeni kullanıcı");
      user.save();
      req.session.isLogined=true;
      req.session.activeUser=user;
      res.redirect("/");
      
  }
    else{
      console.log("zaten kayıtlı");
    res.redirect("/register")
  }
  })
}
exports.postlogin=async function(req,res){
  const email=req.body.mail;
  const password=req.body.password;
  User.findOne({email:email}).then(user=>{
    if(user){
      hasher.compare(password,user.password,function(err,hm){
        if(user && hm==true){
      
      req.session.activeUser=user;
        console.log("kullanıcı giriş yaptı");
        console.log(user);
        req.session.isLogined=true
        res.redirect("/");
    } 
    else{
    req.session.isLogined=false;
    res.redirect("/login")
  }
    })
    }
    else{
      req.session.isLogined=false;
      res.redirect("/login")
    }
  })
 
}
exports.postresetpassword=async function(req,res){
  res.redirect("/");
}

exports.logout=async function(req,res){
    req.session.isLogined=false;
    req.session.activeUser=undefined;
    res.redirect("/login");
}

//req.params.name
exports.profil=async function(req,res){
  User.findOne({email:req.params.email}).then(user=>{
    if(user){
      res.render("Profil",{
        dirname:req.hostname,
        isLogined:req.session.isLogined,
        activeUser:req.session.activeUser,
        user:user,
        url:"/Profilinfo",
        modul:module.exports
      });
    } 
    else{
        res.redirect("/")
  }
  })
}

exports.profileInfo=async function(req,res){
  console.log("Profilinfo");
    console.log(req.user)

    res.render("Profilinfo",{
          dirname:req.hostname,
          isLogined:req.session.isLogined,
          activeUser:req.session.activeUser,
          url:"/Profilinfo",
          modul:module.exports
        });
}
exports.getgoogleregister=async function(req,res){
  res.render("googleregister",{
  dirname:req.hostname,
  url:"/register",
  isLogined:req.session.isLogined,
  activeUser:req.session.activeUser,
  googleAuth:req.session.googleUser,
  modul:module.exports
});
}