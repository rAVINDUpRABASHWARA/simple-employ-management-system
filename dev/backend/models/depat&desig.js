import mongoose from "mongoose";

const depatanddesigSchema = mongoose.Schema ({
    department: {
        type : String,
    },
    designation: [String],
})

const depatanddesig = mongoose.model("depat&desig", depatanddesigSchema);
export default depatanddesig;