const { Schema, model } = require('mongoose');
//const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./reactionSchema.js');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},
{
    virtuals: {
        reactionCount: {
            get() {
                return this.reactions.length;
            }
        }
    }
});   

// Initialize our thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;