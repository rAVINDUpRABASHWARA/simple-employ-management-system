//To connect the database use the mongoose and following lin use to import the mongoose
import mongoose from "mongoose";

//In mongodb there is something call schema, so there is a method in mongoose and assign that method to a constant variable
const departmentSchema = new mongoose.Schema ({
    department: {
        type : String,
    },
})

//data is add to the routes and that data will send to the DB through modles.
const department = mongoose.model("department", departmentSchema);
export default department;