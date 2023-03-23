const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
        // set custom id to avoid confusion 
        //with parent comment _id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Schema.Types.ObjectId()
            // added {schema} to type object id
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: () => dateFormat(createdAtVal)
        },
});