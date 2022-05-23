//To connect the database use the mongoose and following lin use to import the mongoose
import mongoose from 'mongoose';
//import other dependencises
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
        password : {
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
        },
        tokens : [
            {       
                token : {
                    type : String,
                    required : true
                }   
            }
        ]
    }
);

//Hashing Password to Secure
employeeSchema.pre('save', async function(next){
    if(this.isModified('password')) {
        this.password = bcryptjs.hashSync(this.password, 10);
    }
    next();
})

//Generate tokens to verify User
employeeSchema.methods.generateToken = async function() {
    try {
        let generatedToken = jwt.sign({_id : this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : generatedToken});
        await this.save();
    } catch (error) {
        console.log(error);
    }
}
//data is add to the routes and that data will send to the DB through modles.
const employee = mongoose.model('employee', employeeSchema);
export  default employee;