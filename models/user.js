var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    ID: String,
    PWD: String,
});

module.exports = mongoose.model('user', userSchema);
