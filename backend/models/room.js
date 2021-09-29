const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

//creates a new schema for users which will represent each document added to the collection
const roomSchema = new Schema({
    description: {
        type: String
    },
    users: [User]
}, {
    timestamps: true

}
);

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;