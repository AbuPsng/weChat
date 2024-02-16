import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please provide your full name"]
    },
    username: {
        type: String,
        required: [true, "Please provide your username"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a strong password"],
        minlength: 6
    },
    gender: {
        type: String,
        required: [true, "Please provide your gender"],
        enum: ["male", "female", "others"]
    },
    profilePicture: {
        type: String,
        default: ""
    },
})

export const userModel = mongoose.model("User", userSchema)