//To connect the database use the mongoose and following lin use to import the mongoose
import mongoose from "mongoose";

//In mongodb there is something call schema, so there is a method in mongoose and assign that method to a constant variable
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

//data is add to the routes and that data will send to the DB through modles.
const empContact = mongoose.model('employee_contact', employeeContactSchema);
export default empContact;