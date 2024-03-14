import shiftModel from '../models/shift.js'
import { ApiErrors } from '../utils/ApiErrors.js'
import { asyncHandler } from '../utils/asyncHandeler.js'
import { ApiResponce } from '../utils/ApiResponce.js'

const setShiftDetails = asyncHandler(async (req, res) => {
    const { TSD,
        checkInAfter,
        checkInBefore,
        endTime,
        entryGP,
        exitGP,
        minHour_FullDay,
        shiftName,
        startTime,
        threshhold_HalfDay } = req.body
    if ([TSD, endTime, shiftName, startTime].some(item => item && item.trim() === "")) {
        throw new ApiErrors(400, "Fill up properly")
    }
    const shift = await shiftModel.create({
        TSD,
        checkInAfter,
        checkInBefore,
        endTime,
        entryGP,
        exitGP,
        minHour_FullDay,
        shiftName,
        startTime,
        threshhold_HalfDay
    })

    const responseData = await shiftModel.aggregate(
        [
            {
                $lookup: {
                    from: "joinings",
                    localField: "shiftName",
                    foreignField: "default_shift",
                    as: "employee",
                }
            },
            {
                $addFields: {
                    empCount: { $size: "$employee" },
                    id: "$_id"
                }
            },
            {
                $project: {
                    shiftName: 1,
                    id: 1,
                    startTime: 1,
                    endTime: 1,
                    entryGP: 1,
                    exitGP: 1,
                    empCount: 1
                }
            }
        ]
    )
    res.status(200).json(new ApiResponce(200, responseData[0], "Shift added."))
})

const getShieftDetails = asyncHandler(async (req, res) => {
    const response = await shiftModel.aggregate(
        [
            {
                $lookup: {
                    from: "joinings",
                    localField: "shiftName",
                    foreignField: "default_shift",
                    as: "employee",
                }
            },
            {
                $addFields: {
                    empCount: { $size: "$employee" },
                    id: "$_id"
                }
            },
            {
                $project: {
                    shiftName: 1,
                    id: 1,
                    startTime: 1,
                    endTime: 1,
                    entryGP: 1,
                    exitGP: 1,
                    empCount: 1
                }
            }
        ]
    )
    res.status(200).json(new ApiResponce(200, response, "Shift fetched."))
})

export { setShiftDetails, getShieftDetails }