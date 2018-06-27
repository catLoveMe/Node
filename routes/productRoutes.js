/**
 * Created by ZXW on 2017/11/14.
 */
//"use strict";
const express = require("express");
const productRoute = express.Router();
const productController = require("../controller/productController.js");

productRoute.route("/getProductMess.do").post(productController.getProductC);
productRoute.route("/productNum.do").get(productController.productNumC);
productRoute.route("/productType.do").get(productController.productTypeC);
productRoute.route("/getTotalPagePro.do").get(productController.getTotalPageProC);
productRoute.route("/searchProduct.do").post(productController.searchProductC);
productRoute.route("/addproduct.do").post(productController.addproduct);
productRoute.route("/deleteproduct.do").post(productController.deleteproduct);
productRoute.route("/loadeditproduct.do").post(productController.loadeditproduct);
productRoute.route("/editproduct.do").post(productController.editproduct);

module.exports = productRoute;

