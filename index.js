const express=require("express");
const app=express();
const userRoutes=require("./routes/user");
app.use(express.static("public"));

app.set("view engine","ejs");

const errorsController=require("./controllers/errors");

app.use(userRoutes);

app.use(errorsController.code404)

const PORT=8000;
app.listen(PORT,()=>{
    console.log("listening port "+PORT);
})