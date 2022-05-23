//To connect the database use the mongoose and following lin use to import the mongoose
import mongoose from "mongoose";

//In mongodb there is something call schema, so there is a method in mongoose and assign that method to a constant variable
const employAddressSchema = new mongoose.Schema (
    {
        EmpId: {
            type: String,
            required: true
        },
        Address: {
            type: String,
            required: true
        }
    }
);

//data is add to the routes and that data will send to the DB through modles.
const empAddress = mongoose.model('employee_address', employAddressSchema);
export default empAddress;