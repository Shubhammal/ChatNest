import express from 'express';
import dotenv from 'dotenv';
import mongoose, { mongo } from 'mongoose';
const app = express()
dotenv.config()
const PORT =process.env.PORT || 5005;
const URL = process.env.MONGOOSE_URL;

try {
    mongoose.connect(URL)
    console.log("Mongoose is connected ");
} catch (error) {
    console.log(error)
}

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
})