/**
 * Created by ZXW on 2017/11/14.
 */
//"use strict";
const express = require("express");
const productRoute2 = express.Router();
const productController = require("../controller/productController2.js");
const multipart = require("connect-multiparty");

productRoute2.route("/getProductMess.do").post(productController.getProductC);
productRoute2.route("/productNum.do").get(productController.productNumC);
productRoute2.route("/productType.do").get(productController.productTypeC);
productRoute2.route("/getTotalPagePro.do").get(productController.getTotalPageProC);
productRoute2.route("/searchProduct.do").post(productController.searchProductC);
productRoute2.route("/addproduct.do").post(productController.addproduct);
productRoute2.route("/deleteproduct.do").post(productController.deleteproduct);
productRoute2.route("/loadeditproduct.do").post(productController.loadeditproduct);

//for zz begin
productRoute2.route("/editproduct.do").post(productController.editproduct);
productRoute2.route("/productImg.do").post(productController.productImg);
productRoute2.route("/productText.do").post(productController.productText);
productRoute2.route("/imgStatus.do").post(productController.imgStatus);
productRoute2.route("/textStatus.do").post(productController.textStatus);
productRoute2.route("/editpro.do").post(productController.editpro);
productRoute2.post("/fsProImg.do",multipart({uploadDir:'./temp'}),productController.fsProImg);
productRoute2.route("/addshowimg.do").post(productController.addshowimg);
productRoute2.route("/addproimg.do").post(productController.addproimg);
//for zz end

//SDL 新增
productRoute2.route("/addProductBase.do").post(productController.addProductBase);
module.exports = productRoute2;
