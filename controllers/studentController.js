//import model
const Student = require('../models/student');
const Mentor = require('../models/mentor');

//defind student controller
const studentController = {
    createStudent: async (request, response) => {
        try {
            const student = new Student(request.body);
            const savedStudent = await student.save();
            response.status(201).send(savedStudent);
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    },
    getAllStudents: async (request, response) => {
        try {
            const students = await Student.find();
            response.status(200).json(students);
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    },
    assignMentor: async (request, response) => {
        try {
            const student = await Student.findById(request.params.studentId);
            const newMentor = await Mentor.findById(request.body.mentorId);

            if(student.currentMentor) {
                student.previousMentors.push(student.currentMentor);
            }

            student.currentMentor = newMentor._id;

            await student.save();

            response.status(200).send(student);

        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    },
    showPrevMentors: async (request, response) => {
        try {
            const student = request.params.studentId;
            const prevMentors = await Student.findOne({ _id: student }).populate('previousMentors', 'name');

            response.status(200).send(prevMentors);
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    }

}

//export
module.exports = studentController;