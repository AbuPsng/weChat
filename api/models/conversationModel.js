import mongoose from "mongoose"

const conversationSchema = new mongoose.Schema({
    participants: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    message: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        default: []
    }
}, {
    timestamps: true
})

export const messageModel = mongoose.model("Conversation", conversationSchema)