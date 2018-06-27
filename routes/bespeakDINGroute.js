const express = require("express");
const bespeakDingcontroller =  require("../controller/bespeakDingcontroller.js");
const router = express.Router();
router.route("/bespeakDing1.do")
    .post(bespeakDingcontroller.loadDing);


router.post("/bespeakDING2.do",bespeakDingcontroller.xiuDING);
router.post("/bespeakDING3.do",bespeakDingcontroller.quexiuDING);
router.post("/bespeakDING5.do",bespeakDingcontroller.addDING);
router.post("/bespeakDING4.do",bespeakDingcontroller.deleDING);
router.post("/bespeakDING6.do",bespeakDingcontroller.select);



router.get("/getstaff1.do",bespeakDingcontroller.showstaff);
router.get("/getstaffPageTotal1.do",bespeakDingcontroller.getstaffPageTotal);
module.exports=router;