//To connect the database use the mongoose and following lin use to import the mongoose
import mongoose from 'mongoose';

//In mongodb there is something call schema, so there is a method in mongoose and assign that method to a constant variable
const employeeSchema = new mongoose.Schema(
    {
        EmpId: {
            type: String,
            unique: true,
            required: true
        },
        First_Name: {
            type: String,
            required: true
        },
        Last_Name: {
            type: String,
            required: true
        },
        DoB: {
            type: String,
            required: true
        },
        NIC: {
            type: String,
            unique: true,
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
        isAdmin: {
            type: Boolean,
            default: false,
            required: true
        },
        RegisteredDate: {
            type: Date,
            default: Date.now
        }
    }
);

//data is add to the routes and that data will send to the DB through modles.
const employee = mongoose.model('employee', employeeSchema);
export  default employee;