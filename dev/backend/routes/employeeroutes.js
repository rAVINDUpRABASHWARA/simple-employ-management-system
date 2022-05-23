//for this js file need to import the Router function in the npm express package
import express from 'express';

//import employee models

import employee from '../models/employee.js';
import employeeaddress from '../models/employeeaddress.js';
import employeecontacts from '../models/employeecontacts.js';

const router = express.Router();

/* Creation of CRUD operations */

//the following line is use to create this ('http://localhost:5000/employee/add') url and call it 
/* what happens in behind is that when user call that url mention above 
the model files will load to the server and choose the applicable operation */

//add new employee

router.route("/add").post((req, res) => {

    const EmpId = req.body.EmpId;
    const First_Name = req.body.First_Name;
    const Last_Name = req.body.Last_Name;
    const DoB = req.body.DoB;
    const NIC = req.body.NIC;
    const Department = req.body.Department;
    const Designation = req.body.Designation;
    
    const new_employee = new employee({
        
        EmpId,
        First_Name,
        Last_Name,
        DoB,
        NIC,
        Department,
        Designation

    })

    //save the record to the DB and then and catch to get the response if the CURD is successful or not
    new_employee.save()
    .then(() => {
        res.json("Employee Added to the system");// send a message to the FE in json format.
    }).catch((err) => {
        console.log(err);
    })
})


//add employee address
router.route("/add_address").post((req, res) => {
    const EmpId = req.body.EmpId;
    const Address = req.body.Address;

    const new_employeeaddress = new employeeaddress ({

        EmpId,
        Address

    })

    new_employeeaddress.save()
    .then(() => {
        res.json("Employee Address is added to the system");
    }).catch((err) => {
        console.log(err);
    })
})

//add employee contact Number
router.route("/add_contact").post((req, res) => {
    const EmpId = req.body.EmpId;
    const ContactNo = req.body.ContactNo;

    const new_employcontact = new employeecontacts ({

        EmpId,
        ContactNo

    })

    new_employcontact.save()
    .then(() => {
        res.json("Employee Contact is added to the system");
    }).catch((err) => {
        console.log(err);
    })
})



export default router;