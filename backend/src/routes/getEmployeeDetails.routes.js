import { Router } from "express";
import { fetchEmployeRecords } from "../controller/employeeDetails.js";
var router=Router()

router.route("/table-deitails").get(fetchEmployeRecords)

export default router;