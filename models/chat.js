const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const chatSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    text:{
        type:String,
        require:true
    },
    mail:{
        type:String,
        require:true
    }
});
const chat=mongoose.model('Chat',chatSchema)
module.exports=chat;