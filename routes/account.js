const express=require("express");
const router=express.Router();
const User=require("../models/user");
const accountController=require("../controllers/account");

const passport = require('passport');
var userProfile;

router.use(passport.initialize());
router.use(passport.session());
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '284524777831-l4r4394mcjei9ktq2mm57kge05jsokuv.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      
      console.log(userProfile.emails[0].value);
      
      
      return done(null,userProfile );
  }
));

router.get("/register",accountController.getregister);
router.post("/register",accountController.postregister);

router.get("/Login",accountController.getlogin);
router.post("/Login",accountController.postlogin);

router.get("/resetpassword",accountController.getresetpassword);
router.post("/resetpassword",accountController.postresetpassword);

router.get("/logout",accountController.logout);
router.get("/ProfileInfo",accountController.profileInfo)

router.get("/profil/:email",accountController.profil);
router.get("/googleRegister",accountController.getgoogleregister);
router.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
  router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    
    User.findOne({email:userProfile.emails[0].value}).then(user=>{
        req.session.googleUser=userProfile;
        if(user){
          console.log("böyle hesap var");
          
        console.log("kullanıcı giriş yaptı");
        console.log(user);
        req.session.isLogined=true
        req.session.activeUser=user;
        res.redirect('/');
        
  }
  else{
    res.redirect('/googleRegister');
  }
      })
    
  });
module.exports=router;