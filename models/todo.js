const mongoose = require('mongoose');
const todoSchema = mongoose.Schema(
    {
        title: { 
            type: String, 
            required: true, 
            maxLength: 50
        },
        
    },
    {
        description: {
            type: String,
            required: true,
            maxLength: 200
        },
        createdAt: {
            type: Date,
            require: true,
            default: Date.now
        },
        updateAt: {
            type: Date,
            require: true,
            default: Date.now
        }
    }
);
module.exports = mongoose.model('Todo', todoSchema);