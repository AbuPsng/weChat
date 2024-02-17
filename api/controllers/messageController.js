import { conversationModel } from "../models/conversationModel.js"
import { messageModel } from "../models/messageModel.js"

export const sendMessage = async (req, res) => {
    try {

        const { message } = req.body

        const receiverId = req.params.id

        const senderId = req.user._id

        let conversation = await conversationModel.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await conversationModel.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = await messageModel.create({
            senderId, receiverId, message
        })

        if (!newMessage) return res.status(400).json({ error: "Message not send" })

        conversation.messages.push(newMessage._id)

        await conversation.save()

        res.status(201).json(newMessage)

    } catch (error) {
        console.log("error in message controller", error)
        res.status(500).json({ error: error.message })
    }
}

export const getMessage = async (req, res) => {
    try {

        const friendId = req.params.id

        const senderId = req.user._id

        const conversation = await conversationModel.findOne({
            participants: { $all: [senderId, friendId] }
        }).populate("messages")

        if (!conversation) {
            return res.status(200).json([])
        }

        const messages = conversation.messages

        res.status(201).json(messages)

    } catch (error) {
        console.log("error in message controller", error)
        res.status(500).json({ error: error.message })
    }
}