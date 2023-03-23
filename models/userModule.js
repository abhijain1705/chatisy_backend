const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const schema = mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: {type: String},
    about: {type: String}
});
const uniqueOptions = {
    message: 'Email already exists, please try another one'
};

schema.plugin(uniqueValidator, uniqueOptions);

module.exports = mongoose.model("users", schema);
