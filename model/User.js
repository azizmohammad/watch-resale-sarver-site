const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userId: String,
    role: String
});

const User = model('User', userSchema);

module.exports = User;