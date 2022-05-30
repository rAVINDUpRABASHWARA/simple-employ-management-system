//for this js file need to import the Router function in the npm express package
import express from "express";
import expressAsyncHandler from "express-async-handler";

//import employee models
import department from "../models/department.js";
import designation from "../models/designation.js";

const router = express.Router();

/* Creation of CRUD operations */

//the following line is use to create this ('http://localhost:5000/employee/depatanddesig/add_department') url and call it 
/* what happens in behind is that when user call that url mention above 
the model files will load to the server and choose the applicable operation */

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