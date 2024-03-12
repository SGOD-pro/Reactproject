import { Joining } from "../models/joining.js";
import { Overview } from "../models/overview.model.js";
import { asyncHandler } from "../utils/asyncHandeler.js";
import { ApiErrors } from "../utils/ApiErrors.js"
import { ApiResponce } from "../utils/ApiResponce.js";

const fetchEmployeRecords = asyncHandler(async (req, res) => {

    try {
        const responce = await Overview.aggregate([
            {
                $lookup: {
                    from: "joinings",
                    localField: "empId",
                    foreignField: "empId",
                    as: "joiningDetails",
                    pipeline: [
                        {
                            $project: {
                                date_of_joining: 1,
                                active: 1,
                                department: 1,
                                designation: 1,
                            }
                        }
                    ]
                },
            },
            {
                $addFields: {
                    date_of_joining: { $first: "$joiningDetails.date_of_joining" },
                    department: { $first: "$joiningDetails.department" },
                    designation: { $first: "$joiningDetails.designation" }
                }
            },
            {
                $project: {
                    id: "$_id",
                    empId: 1,
                    first_Name: 1,
                    last_Name: 1,
                    middle_Name: 1,
                    gender: 1,
                    date_of_joining: 1,
                    department: 1,
                    designation: 1,
                    _id: 0,
                }
            }
        ])

        if (!responce) {
            throw new ApiErrors(404, "No Data found.")
        }
        
        console.log(responce);
        res.status(200).json(new ApiResponce(200, responce, "Fetched Successfully."))
    } catch (error) {
        if (error instanceof ApiErrors) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal server error." });
        }
    }
})

export { fetchEmployeRecords } 