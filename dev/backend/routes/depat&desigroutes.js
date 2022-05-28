import express from "express";
import expressAsyncHandler from "express-async-handler";


import depatanddesig from "../models/depat&desig.js";

const router = express.Router();

router.post(
    '/add_department',
    expressAsyncHandler(async(req, res) => {
        const newDepartment = new depatanddesig({
            department: req.body.department
        });

        const newDepat = await newDepartment.save();
        res.send({
            department: newDepat.department
        });
    })
);

router.put(
    '/add_designation',
    expressAsyncHandler( async(req, res) => {
        const Designation = await depatanddesig.findOneAndUpdate({
            department: req.body.department 
        }, {
            $addToSet: {
                designation: req.body.designation,
            }
        });
        const newDesig = await Designation.save();
        res.send({
            desgination: newDesig.designation
        });
    })
)

export default router;