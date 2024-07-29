//import mongoose
const mongoose = require('mongoose');
const { type } = require('os');

//define student

const studentSchema = new mongoose.Schema({
    name: String,
    currentMentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor'
    },
    previousMentors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor'
    }]
});

//export
module.exports = mongoose.model('Student', studentSchema, 'students');