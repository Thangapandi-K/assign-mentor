//import mongoose
const mongoose = require('mongoose');

//define mentor
const mentorSchema = new mongoose.Schema({
    name: String,
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
});

//export
module.exports = mongoose.model('Mentor', mentorSchema, 'mentors');