import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './route/user.route.js'




const app = express()
dotenv.config()
const PORT =process.env.PORT || 5005;
const URL = process.env.MONGOOSE_URL;

app.use(express.json());

app.get('/',(req, res)=>{
    res.send("the data had come or not??...");
})

try {
    mongoose.connect(URL)
    console.log("Mongoose is connected ");
} catch (error) {
    console.log(error)
}

app.use('/user', userRoute);

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`)
})