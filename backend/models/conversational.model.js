import mongoose from "mongoose";
import User from "./user.model.js";
import Message from './message.model.js'

const conversationalSchema = mongoose.Schema({
     participates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
     }],
     message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
     }],
     lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
     },
     createAt: {
        type: Date,
        default: Date.now,
     },
}, {
   timestamps: true,
});


const Conversation = mongoose.model('conversation' , conversationalSchema);

export default Conversation;
