/**
 * Created by SDL on 2017/11/14 0014.
 */
const express = require("express");
const router = express.Router();

const activityIntroController = require("../controller/activityIntroController");
const activityApplyController = require("../controller/activityApplyController");

//活动内容
router.get("/act_getPageTotal.do",activityIntroController.getPageTotal);
router.get("/queryActivity.do",activityIntroController.queryActivity);
router.get("/addActivity.do",activityIntroController.addActivity);
router.get("/updateActivity.do",activityIntroController.updateActivity);
router.get("/deleteActivity.do",activityIntroController.deleteActivity);
//活动申请
router.get("/applyGetPageTotal.do",activityApplyController.getPageTotal);
router.get("/applyQueryActivity.do",activityApplyController.queryActivity);
router.get("/applyDeleteActivity.do",activityApplyController.deleteActivity);
module.exports = router;