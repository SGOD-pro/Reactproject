import { Router } from "express";
import { getShieftDetails, setShiftDetails } from "../controller/timeAttendence.controller.js";

var router = Router()
router.route('/setShift').post(setShiftDetails)
router.route('/getShift').get(getShieftDetails)
export default router