import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

dotenv.config();

//assign a port to run the server
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

//get the MongoDB url to connect the application with mongoDB
const URL = process.env.MONGODB_URI;

mongoose.connect(URL);

const connection = mongoose.connection;

//open a connection with MongoDB
connection.once("open", ()=> {
    console.log("MongoDB Conncetion Success!!");
})

//get the current port number
app.listen(PORT, () => {
    console.log(`'Sever is running on port ${PORT}`);
})