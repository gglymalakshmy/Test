const express=require("express")
const {protect} =require("../middle/middle")
const {data,arrayGet,getuserData,getOneData,getOneUser,signUp,login,userHome,updateUser,deleteUser,deleteParamUser,test,testing,getallEmails,updateEmail}= require("./Controller/testController")
const router= express.Router()
router.route("/").get(data)
router.route("/").post(arrayGet)

router.route("/getusers").get(getuserData);
router.route("/getoneData").get(getOneData);
router.route("/getOneUser").get(getOneUser);

router.route("/login").post(login);
router.route("/signup").post(signUp);

router.route("/home").get(protect,userHome);

router.route("/update").put(updateUser);
router.route("/delete").delete(deleteUser);
router.route("/deleteparams/:del").delete(deleteParamUser);

router.route("/test").get(test);

router.route("/testing").post(testing);

router.route("/emails").get(getallEmails);

router.route("/updatemail").put(updateEmail);



module.exports=router 