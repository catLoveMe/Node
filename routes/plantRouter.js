/**
 * Created by Administrator on 2017/11/14.
 */
const express = require("express");
const plantRoute = express.Router();
const plantController = require("../controller/plantController");
// const upload = require("../config/uploadConfig");
const multipart = require("connect-multiparty");

//更新
plantRoute.route("/getTea.do").get(plantController.getPlant);

//修改
plantRoute.route("/updaTea.do").post(plantController.updaTea);

//增加
plantRoute.route("/addinsert.do").post(plantController.addinsert);

//删除
plantRoute.route("/deleTea.do").post(plantController.deleTea);

//搜索
plantRoute.route("/serrchTea.do").post(plantController.serrchTea);

//分页
plantRoute.route("/getpage.do").get(plantController.getpage);

//上传图片
plantRoute.post("/sendImg.do",multipart({uploadDir:'./temp'}),plantController.sendImg);


//下拉框数据
plantRoute.route("/getTeaname.do").get(plantController.getTeaname);

module.exports = plantRoute;