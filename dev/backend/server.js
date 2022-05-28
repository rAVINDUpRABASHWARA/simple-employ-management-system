import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import employeeRouter from './routes/employeeroutes.js';
import depatanddesigrouter from './routes/depat&desigroutes.js';

const app = express();

dotenv.config();

//assign a port to run the server
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//These methods to get data and cookies from Frontend
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

//get the MongoDB url to connect the application with mongoDB
const URL = process.env.MONGODB_URI;

mongoose.connect(URL);

const connection = mongoose.connection;

//open a connection with MongoDB
connection.once("open", ()=> {
    console.log("MongoDB Conncetion Success!!");
})

//the following line is use to create this ('http://localhost:5000/employee') url and call it 
/* what happens in behind is that when user call that url mention above 
the model files will load to the server */

app.use('/api/employee', employeeRouter);
app.use('/api/depatanddesig', depatanddesigrouter);

//get the current port number
app.listen(PORT, () => {
    console.log(`'Sever is running on port ${PORT}`);
})