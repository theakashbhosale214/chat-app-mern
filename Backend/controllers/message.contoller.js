import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"

export const sendMessage = async (req,res) => {
    // console.log("message sent",req.params.id);

    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId,receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error is sendMessage controller", error.message)
        res.status(500).json({error:"Internal server error"});
    }
}

export const getMessages = async (req,res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants : {$all: [senderId,userToChatId]},
        }).populate("messages");

        if(!conversation) return res.status(200).json(conversation.messages);
        const message = conversation.messages;

        res.status(200).json(message);
    } catch (error) {
        
        console.log("Error in getMessage contoller: ", error.message)
        res.status(500).josn({error:"Internal server error"});
    }
}