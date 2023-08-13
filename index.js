const express=require("express");
const app=express();
const userRoutes=require("./routes/user");
const accountRoutes=require("./routes/account");
const mongoose=require("mongoose");
const cookieParser=require("cookie-parser");
const session = require('express-session')

const errorsController=require("./controllers/errors");

const User=require("./models/user");

app.use(cookieParser());
app.use(express.static("public"));

app.set("view engine","ejs");

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}))

app.use(userRoutes);
app.use(accountRoutes);

app.use(errorsController.code404)

mongoose.connect("mongodb+srv://Zwole:Zwoleforwin31@cluster0.xmujmgd.mongodb.net/Node-chat?retryWrites=true&w=majority",{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
  console.log("Mongodb bağlandı");

  User.findOne({name:'Zwole'}).then(user=>{
    if(!user){
        user=new User({name:'Zwole',email:'onlyzwole@gmail.com',password:"Zwoleforwin31!"});
        console.log("yeni kullanıcı");
        return user.save();
    }
    return user;
  })
}).catch((err)=>{
  console.log(err);
})
    const PORT=8000;
    app.listen(PORT,()=>{
    console.log("listening port "+PORT);
})