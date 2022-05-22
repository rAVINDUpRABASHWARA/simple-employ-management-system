import mongoose from "mongoose";

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

const empAddress = mongoose.model('employee_address', employAddressSchema);
export default empAddress;