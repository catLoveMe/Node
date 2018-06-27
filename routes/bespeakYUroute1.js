const express = require("express");
const bespeakYUcontroller1 =  require("../controller/bespeakYUcontroller1");
const router = express.Router();
router.route("/bespeakYu1.do")
    .post(bespeakYUcontroller1.load);

module.exports=router;

//修改
router.post("/bespeakYU2.do",bespeakYUcontroller1.xiuNewTea);
router.post("/bespeakYU3.do",bespeakYUcontroller1.quexiuNewTea);
//删除
router.post("/bespeakYU4.do",bespeakYUcontroller1.delect);
router.post("/bespeakYU5.do",bespeakYUcontroller1.add);
//查询
router.post("/bespeakYU6.do",bespeakYUcontroller1.select);
//分页
//router.get("/bespeakYU7.do",bespeakYUcontroller1.page);

router.get("/getstaff.do",bespeakYUcontroller1.showstaff)
    .get("/getstaffPageTotal.do",bespeakYUcontroller1.getstaffPageTotal);