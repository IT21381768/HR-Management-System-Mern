const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    type: {
        type: String,
    },
    gender: {
        type: String,
    },
    id: {
        type: String,
    },
    salary: {
        type: String,
    },
    attendance: {
        type: String,
    }

});

module.exports = mongoose.model('attendance', leaveSchema);