/**
 * Created by Administrator on 2017/11/17.
 */
/**
 * Created by Administrator on 2017/11/14.
 */
const express = require("express");
const plantRoute = express.Router();
const plantController = require("../controller/museumController");
const multipart = require("connect-multiparty");

//更新
plantRoute.route("/getMuseum.do").get(plantController.getMuseum);


//增加
plantRoute.route("/addMuseum.do").post(plantController.addMuseum);



//修改
plantRoute.route("/updaMuseum.do").post(plantController.updaMuseum);


//获取商品名
plantRoute.route("/getPlayname.do").get(plantController.getPlayname);


//删除
plantRoute.route("/deleMuseum.do").post(plantController.deleMuseum);

//搜索
plantRoute.route("/serrchMuseum.do").post(plantController.serrchMuseum);

//分页
plantRoute.route("/getMuseumPage.do").get(plantController.getMuseumPage);

//上传图片
plantRoute.post("/sendImg.do",multipart({uploadDir:'./temp'}),plantController.sendImg);

module.exports = plantRoute;