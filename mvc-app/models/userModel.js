const mongoose = require('mongoose');

// Define the blueprint for your data
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
