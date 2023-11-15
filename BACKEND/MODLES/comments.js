const mongoose = require('mongoose');
const model = mongoose.model;

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxlength: 512
    },
    commentedBy: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

// export default model('Comment', commentSchema);
module.exports = model('Comment', commentSchema);