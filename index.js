const express=require("express");
const app=express();
const userRoutes=require("./routes/user");
app.use(express.static("public"));

app.set("view engine","ejs");

app.use(userRoutes);


app.listen(3000,()=>{
    console.log("listening port 3000");
})