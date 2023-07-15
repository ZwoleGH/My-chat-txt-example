const express=require("express");
const app=express();
const userRoutes=require("./routes/user");
app.use(express.static("public"));

app.set("view engine","ejs");

app.use(userRoutes);

const PORT=8000;
app.listen(PORT,()=>{
    console.log("listening port "+PORT);
})