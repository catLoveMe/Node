/**
 * Created by dell on 2017/11/15.
 */
const express = require("express");
const router = express.Router();
const multiparty = require("connect-multiparty");

const packController =  require("../controller/packController.js");


router.get("/showImg.do",packController.showImg);
router.get("/newPack.do",packController.newPack);
router.get("/delete.do",packController.deletePack);
router.get("/changeInfo.do",packController.changeInfo);
router.get("/checkInfo.do",packController.searchInfo);

router.get("/getPackPage.do",packController.getPage);

router.post("/uploadImg.do",multiparty({uploadDir:"./temp"}),packController.uploadImg);
module.exports=router;