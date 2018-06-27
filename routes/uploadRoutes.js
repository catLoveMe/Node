/**
 * Created by SDL on 2017/11/22 0022.
 */
const express = require("express");
const router = express.Router();
const upload = require("../config/uploadConfig");


router.post("/uploadImgEditor.do",upload.array("imgFile",20),(req,resp)=>{
    let fname = req.files[0].filename; //此处为我设置的存储文件名，可以根据情况自行修改
    let info = {
        "error":0,
        "url":"/apj/upload/"+fname //此处为我设置的存储文件名，可以根据情况自行修改
    };
    resp.send(info);
});

router.post("/productDetailEditor.do",function(req,res){
    console.log(req.body);
}) ;

module.exports = router;