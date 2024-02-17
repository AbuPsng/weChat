import mongoose from "mongoose"

const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        required: true,
        default: []
    }]
}, {
    timestamps: true
})

export const conversationModel = mongoose.model("Conversation", conversationSchema)