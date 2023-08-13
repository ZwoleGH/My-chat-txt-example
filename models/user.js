const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const userSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    roles:[
        {
            admin:Boolean,
            user:Boolean
        }
    ]
});
const user=mongoose.model('User',userSchema)
module.exports=user;