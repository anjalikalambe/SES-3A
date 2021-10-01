const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creates a new schema for users which will represent each document added to the collection
const userSchema = new Schema({
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
}, {
    timestamps: true

}
);

const User = mongoose.model('User', userSchema);

module.exports = User;