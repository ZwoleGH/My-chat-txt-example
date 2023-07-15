const express=require("express");

const bodyParser=require("body-parser");

const qers=require("querystring");

const fs=require("fs");

const url=require("url");

const router=express.Router();

const db=require("../data/db");

const nodeChatController=require("../controllers/nodeChat");
const delMsgController=require("../controllers/deleteMsg");

router.use(bodyParser.urlencoded({extended: false}));

router.post("/chat",nodeChatController.sendText);

router.get("/chat",nodeChatController.getText);

router.post("/adminchat",nodeChatController.adminsendText);

router.get("/delMsg",delMsgController.delMsg);

router.get("/adminchat",nodeChatController.admingetText);

router.get("/text/:id",nodeChatController.textDetails);

router.get("/",nodeChatController.home)





module.exports=router;


