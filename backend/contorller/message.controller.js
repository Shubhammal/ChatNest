import express from 'express';
import Conversation from '../models/conversational.model.js';
import Message from '../models/message.model.js';
import { getReceiverSocketId, io } from '../SocketIo/server.js';

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiver_id } = req.params;
        const sender_id = req.user._id;

        let conversation = await Conversation.findOne({
            participates: { $all: [sender_id, receiver_id] },
        });

        // If conversation doesn't exist, create one
        if (!conversation) {
            conversation = await Conversation.create({
                participates: [sender_id, receiver_id],
            });
        }

        // Create a new message
        const newMessage = new Message({
            senderId: sender_id,
            receiverId: receiver_id,
            message,
        });

        // Push the message into the conversation
        conversation.message.push(newMessage._id);
        conversation.lastMessage = newMessage._id;

        // Save both the message and conversation
        await Promise.all([conversation.save(), newMessage.save()]);
        console.log("doesnt it reciever_id "+receiver_id);
        const receiverSocketId = getReceiverSocketId(receiver_id);
        console.log("receiverSocketId Checking??....")
        console.log(receiverSocketId)
        
        if(receiverSocketId){

            io.to(receiverSocketId).emit('newMessage',newMessage);
            console.log("checking i m in receiverSocketId in msgcontroller");
            
            console.log(newMessage);
            
            // res.status(201).json({mesg:"value is updated" + receiverSocketId});
        } 

        res.status(202);

    } catch (error) {
        console.error("Error in sending message: ", error);
        res.status(500).json({ message: "Internal server problem in sending message" });
    }
};



export const getMessage = async (req, res) => {
    try {
        const { id: chatUser } = req.params;
        const sender_id = req.user._id;

        const conversation = await Conversation.findOne({
            participates: { $all: [sender_id, chatUser] },
        }).populate('message');

        if (!conversation) {
            return res.status(200).json([]);
        }

        res.status(200).json({ messages: conversation.message });
    } catch (error) {
        console.error("Error in Getting message: ", error);
        res.status(500).json({ message: "Internal server problem in Getting message" });
    }
};


