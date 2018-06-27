/**
 * Created by zxw on 2017/11/11.
 */
const express = require("express");
const staffController = require("../controller/staffController.js");
const myRoute = express.Router();


myRoute.get("/getstaffmag.do",staffController.showstaff)
        .get("/getstaffPageTotalmag.do",staffController.getstaffPageTotal)
        .post("/addstaff.do",staffController.addstaff)
        .post("/deletestaff.do",staffController.deletestaff)
        .post("/delStaffGroup.do",staffController.delStaffGroup)
        .get("/showeditstaff.do",staffController.editstaff)
        .post("/updateeditstaff.do",staffController.updateeditstaff)
        .get("/showsearchstaff.do",staffController.showsearchstaff)
        .get("/getroleporwerchoose.do",staffController.getroleporwerchoose);
module.exports = myRoute;