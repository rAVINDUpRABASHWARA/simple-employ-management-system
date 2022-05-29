import mongoose from "mongoose";

const designationSchema = new mongoose.Schema ({
    department: {
        type : String,
    },
    designation: {
        type : String,
    }
})

const designation = mongoose.model("designation", designationSchema);
export default designation;