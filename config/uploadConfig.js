"use strict";
const multer = require("multer");
//磁盘位置
const stages = multer.diskStorage({
    //文件存储的位置
    destination:function(req,file,cb){
        cb(null,"./public/upload");
    },
    filename:function(req,file,cb){
        //文件名
        var fileFormat = (file.originalname).split(".");
        cb(null,file.originalname);
        console.log("插入文件夹成功");
    }
});
const upload = multer({
    storage:stages
});
upload.changedestorage=function(filename)
{ console.log("修改上传路径");
    let storage=multer.diskStorage({
        destination: function(request,file,cb){
            cb(null,"./public/upload/"+filename)
        },
        filename:function(request,file,cb){
            cb(null,file.originalname)
        }
    });
    this.storage=storage
};
module.exports=upload;
