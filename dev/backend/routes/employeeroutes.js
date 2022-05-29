//for this js file need to import the Router function in the npm express package
import express from 'express';

//import employee models

import employee from '../models/employee.js';

import bcryptjs from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import { generateToken, isAdmin, isAuth } from '../util.js';

const router = express.Router();

/* Creation of CRUD operations */

//the following line is use to create this ('http://localhost:5000/employee/add') url and call it 
/* what happens in behind is that when user call that url mention above 
the model files will load to the server and choose the applicable operation */

//add new employee

router.post(
    '/add_employee',
    expressAsyncHandler(async (req, res)=> {
        const newEmployee = new employee({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            DoB: req.body.DoB,
            NIC: req.body.NIC,
            address1: req.body.address1,
            contactNo1: req.body.contactNo1,
            password: bcryptjs.hashSync(req.body.password),
            Department: req.body.rDepartment,
            Designation: req.body.rDesignation
        });
        const remployee = await newEmployee.save();
        res.send({
            _id: remployee._id,
            FirstName: remployee.FirstName,
            LastName: remployee.LastName,
            DoB: remployee.DoB,
            NIC: remployee.NIC,
            address1: remployee.address1,
            contactNo: remployee.contactNo1,
            password: remployee.password,
            Department: remployee.Department,
            Designation: remployee.Designation,
            isAdmin: remployee.isAdmin,
            token: generateToken(remployee),
                
        });
    })
);

//add employee address
router.put(
    '/add_address/:id',
    // isAdmin,
    // isAuth,
    expressAsyncHandler(async (req, res) => {
        const remployee = await employee.findById(req.params.id);
        if(remployee) {
            remployee.address2 = req.body.address2 || remployee.address2;
            remployee.address3 = req.body.address3 || remployee.address3;
            remployee.isAdmin = Boolean(req.body.isAdmin);

            const updateEmployee = await remployee.save();
            res.send({message: "New Address Added", remployee: updateEmployee});
        } else {
            res.status(404).send({message: 'Employee Not Found'});
        }
    })
)


//add employee contact Number
router.put(
    '/add_contact/:id',
    // isAdmin,
    // isAuth,
    expressAsyncHandler(async (req, res) => {
        const remployee = await employee.findById(req.params.id);
        if(remployee) {
            remployee.contactNo2 = req.body.contactNo2 || remployee.contactNo2;
            remployee.contactNo3 = req.body.contactNo3 || remployee.contactNo3;
            remployee.isAdmin = Boolean(req.body.isAdmin);

            const updateEmployee = await remployee.save();
            res.send({message: "New Contact No. Added", remployee: updateEmployee});
        } else {
            res.status(404).send({message: 'Employee Not Found'});
        }
    })
)

//Get All Employees

router.get(
    '/employees',
    // isAdmin,
    // isAuth,
    expressAsyncHandler(async (req, res) => {
        const remployee = await employee.find({});
        res.send(remployee);
    })
);

//Get One Employee

router.get(
    '/one_employee/:id',
    // isAdmin,
    // isAuth,
    expressAsyncHandler(async (req, res) => {
        const remployee = await employee.findById(req.params.id);
        if(remployee) {
            res.send(remployee);
        }
        res.status(404).send({ message: 'Employee dose not exists.'});
    })
)


//update Employee details

router.put(
    '/update_employee/:id',
    // isAdmin,
    // isAuth,
    expressAsyncHandler(async (req, res) => {
        const remployee = await employee.findById(req.params.id);
        if(remployee) {
            remployee.FirstName = req.body.FirstName || remployee.FirstName;
            remployee.LastName = req.body.LastName || remployee.LastName;
            remployee.DoB = req.body.DoB || remployee.DoB;
            remployee.NIC = req.body.NIC || remployee.NIC;
            remployee.address1 = req.body.address1 || remployee.address1;
            remployee.address2 = req.body.address2 || remployee.address2;
            remployee.address3 = req.body.address3 || remployee.address3;
            remployee.contactNo1 = req.body.contactNo1 || remployee.contactNo1;
            remployee.contactNo2 = req.body.contactNo2 || remployee.contactNo2;
            remployee.contactNo3 = req.body.contactNo3 || remployee.contactNo3;
            // remployee.password = req.body.password || remployee.password;

            const update_employee = await remployee.save();
            res.send({ message: 'Employee Updated', remployee: update_employee });
        } else {
            res.status(404).send({ message: 'Employee Not Found'});
        }
    })
);

//delete employee

router.delete(
    '/delete_employee/:id',
    // isAdmin,
    // isAuth,
    expressAsyncHandler(async (req, res) => {
        const remployee = await employee.findById(req.params.id);
        if(remployee) {
            if (remployee.isAdmin) {
                res.status(400).send({message: 'Can Not Delete Admin User'});
                return;
            }
            await remployee.remove();
            res.send({ message : 'Employee Deleted'});
        } else {
            res.status(404).send({ message: 'Employee Not Found'});
        }
    })
);

//login user

router.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
        const remployee = await employee.findOne({NIC: req.body.NIC });
        if(remployee) {
            if(bcryptjs.compareSync(req.body.password, remployee.password)) {
                res.send({
                    _id: remployee._id,
                    FirstName: remployee.FirstName,
                    LastName: remployee.LastName,
                    isAdmin: remployee.isAdmin,
                    token: generateToken(remployee),
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid NIC and password'});
    })
);


//Logout 

router.get('/logout', 
    expressAsyncHandler( async(req, res) => {
        res.clearCookie("jwt", {path: '/'})
        res.status(200).send("User Logged Out");
    })
)







export default router;