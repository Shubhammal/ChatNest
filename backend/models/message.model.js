import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    message: {
        type: String,
        require: true,
        maxlength: 1000,
        trim: true,
        validate: [
            { validator: (value) => value.length > 0 ,
                message:'message cannot be empty'
            }
        ]

    },
},{
    timestamps: true,
})

const Message = mongoose.model('Message' , messageSchema);

export default Message;