import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    Password: {
        type: String,
        required: true
    },
    VerifyPass: {
        type: String,
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema); // Correct function for model creation

export default User;
