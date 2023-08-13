module.exports=(req,res,next)=>{
    if(!req.session.activeUser){
        res.redirect("/login");
      }
      next();
}