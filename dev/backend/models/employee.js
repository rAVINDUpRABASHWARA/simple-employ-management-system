//To connect the database use the mongoose and following lin use to import the mongoose
import mongoose from 'mongoose';
//import other dependencises
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

//In mongodb there is something call schema, so there is a method in mongoose and assign that method to a constant variable
const employeeSchema = new mongoose.Schema(
    {
        FirstName: {
            type: String,
            required: true
        },
        LastName: {
            type: String,
            required: true
        },
        DoB: {
            type: String,
            required: true
        },
        NIC: {
            type: String,
            required: true,
            unique: true
        },
        address1 : {
            type: String,
            required: true
        },
        address2 : {
            type: String,
            default: ''
            
        },
        address3 : {
            type: String,
            default: ''
            
        },
        contactNo1 : {
            type: String,
            required: true
        },
        contactNo2 : {
            type: String,
            default: ''
        },
        contactNo3 : {
            type: String,
            default: ''
        },
        password : {
            type: String,
            required: true
        },
        Department: {
            type: String,
            required: true
        },
        Designation: {
            type: String,
            required: true
        },
        RegisteredDate: {
            type: Date,
            default: Date.now
        },
        isAdmin: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    {
        timestamps :true,
    }
);

//data is add to the routes and that data will send to the DB through modles.
const employee = mongoose.model('employee', employeeSchema);
export  default employee;