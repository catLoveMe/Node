const express = require("express");
const checkUserRoute = express.Router();
const checkUserCon = require("../controller/checkUserCon.js");
const orderManger = require("../controller/orderMangerCon.js") ;
const customManger = require("../controller/customController.js");
const roleManger = require("../controller/roleMangerCon.js");
//user
checkUserRoute.route("/checkUser.do").post(checkUserCon.checkUserExCon);
checkUserRoute.route("/findUser.do").get(checkUserCon.finduserC);
checkUserRoute.route("/getCheckNum.do").post(checkUserCon.getCheckNumC);
checkUserRoute.route("/findPassword.do").post(checkUserCon.CheckNumC);
// code 验证码
checkUserRoute.route("/getCode.do").get(checkUserCon.getCodeC);
//order
checkUserRoute.route("/getOrderMess.do").post(orderManger.getOrderMessC);
checkUserRoute.route("/getTotalPage.do").get(orderManger.getTotalPageC);
checkUserRoute.route("/searchOrder.do").post(orderManger.searchOrderC);
checkUserRoute.route("/saveSendThing.do").get(orderManger.saveSendThingC);
checkUserRoute.route("/getProImg.do").post(orderManger.getProImgC);

//getUsername
checkUserRoute.route("/getUserName.do").get(orderManger.getUserNameC);
checkUserRoute.route("/orderNum.do").get(orderManger.orderNumC);
checkUserRoute.route("/packMuil.do").get(orderManger.packMuilC);
checkUserRoute.route("/packImg.do").get(orderManger.packImgC);



//custom
checkUserRoute.route("/getCustomMess.do").post(customManger.getCustomMessC);
checkUserRoute.route("/getTotalPageCustom.do").get(customManger.getTotalPageCustomC);
checkUserRoute.route("/searchCustom.do").post(customManger.searchCustomC);
checkUserRoute.route("/searchMessC.do").post(customManger.searchMessC);


//role
checkUserRoute.route("/getRole.do").get(roleManger.getRoleC);
checkUserRoute.route("/getAllPageRole.do").get(roleManger.getTotalPageC);
checkUserRoute.route("/searchRole.do").get(roleManger.searchRoleC);
checkUserRoute.route("/getRoleName.do").get(roleManger.getRoleNameC);
checkUserRoute.route("/newRole.do").post(roleManger.newRoleC);
checkUserRoute.route("/getNowMess.do").get(roleManger.getNowMessC);
checkUserRoute.route("/updateRole.do").get(roleManger.updateRoleC);
checkUserRoute.route("/deleteRole.do").get(roleManger.deleteRoleC);
module.exports = checkUserRoute;