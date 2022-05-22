import mongoose from "mongoose";

const employeeContactSchema = new mongoose.Schema (
    {
        EmpId: {
            type: String,
            required: true
        },
        ContactNo: {
            type: String,
            required: true
        }
    }
);

const empContact = mongoose.model('employee_contact', employeeContactSchema);
export default empContact;