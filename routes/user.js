const express=require("express");

const bodyParser=require("body-parser");

const qers=require("querystring");

const fs=require("fs");

const url=require("url");

const router=express.Router();

const isLogined=require("../middlewares/isLogined");

const nodeChatController=require("../controllers/nodeChat");
const delMsgController=require("../controllers/deleteMsg");
const editMsgController=require("../controllers/editMsg");
const getMsgController=require("../controllers/getMsg");
const sendMsgController=require("../controllers/sendMsg");


router.use(bodyParser.urlencoded({extended: false}));

router.post("/chat",isLogined,sendMsgController.sendText);

router.get("/chat",isLogined,getMsgController.getText);

router.post("/adminchat",isLogined,sendMsgController.adminsendText);

router.get("/delMsg/:id",delMsgController.delMsg);

router.post("/editMsg",isLogined,editMsgController.editMsg);

router.get("/adminchat",isLogined,getMsgController.admingetText);

router.get("/text/:id",isLogined,nodeChatController.textDetails);

router.get("/",nodeChatController.home)

module.exports=router;


