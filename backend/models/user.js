const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

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

userSchema.pre('save', async function (next) {
    if (this.isModified("password") || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(this.password, salt)
            this.password = hashedPassword
            next()
        } catch (error) {
            next(error)
        }
    } else {
        next();
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;