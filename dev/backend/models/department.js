import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema ({
    department: {
        type : String,
    },
})

const department = mongoose.model("department", departmentSchema);
export default department;