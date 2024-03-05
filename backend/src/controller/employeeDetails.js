import { Employee } from "../models/joining";
import { asyncHandleter } from "../utils/asyncHandeler";


const fetchEmployeRecords = asyncHandleter(async (req, res) => {
    const employees = await Employee
})