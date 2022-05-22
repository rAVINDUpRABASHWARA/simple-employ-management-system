import mongoose, { Schema } from 'mongoose';

const employeeSchema = new mongoose.Schema(
    {
        Empid: {
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

const employee = mongoose.model('employee', employeeSchema);
export  default employee;