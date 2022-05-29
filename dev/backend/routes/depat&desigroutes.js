import express from "express";
import expressAsyncHandler from "express-async-handler";


import department from "../models/department.js";
import designation from "../models/designation.js";

const router = express.Router();

//Add departments
router.post(
    '/add_department',
    expressAsyncHandler(async(req, res) => {
        const newDepartment = new department({
            department: req.body.department
        });

        const newDepat = await newDepartment.save();
        res.send({
            department: newDepat.department
        });
    })
);

//View Departments
router.get(
    '/view_departments',
    expressAsyncHandler( async(req, res) => {
        const departments = await department.find({});   
        res.send(
            departments
        );
    })
)


//Add designations
router.post(
    '/add_designation',
    expressAsyncHandler(async(req, res) => {
        const newDepartment = new designation({
            department: req.body.department,
            designation: req.body.designation,
        });
        
        const newDepat = await newDepartment.save();
        res.send({
            department: newDepat.department,
            designation: newDepat.designation
        });
    })
)
    
//View Designations
    
router.get(
    '/view_designations',
    expressAsyncHandler( async (req, res) => {
        const designations = await designation.find({})
        res.send(
                    designations
        );
    })
)



export default router;