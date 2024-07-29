//import model
const Mentor = require('../models/mentor');
const Student = require('../models/student');


//define mentor controller
const mentorController = {
    createMentor: async (request, response) => {
        try {
            const mentor = new Mentor(request.body);
            const savedMentor = await mentor.save();
            response.status(201).send(savedMentor);
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    },
    getAllMentors: async (request, response) => {
        try {
            const mentors = await Mentor.find();
            response.status(200).json(mentors);
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    },
    assignStudent: async (request, response) => {
        try {
            const student = await Student.findById(request.params.studentId);

            const students = await Student.find({ _id: { $in: request.body.currentMentor } });

            students.forEach((student) => {
                student.currentMentor = mentor._id
                student.save();
            });

            mentor.students = [
                ...mentor.students,
                ...students.map((student) => student._id)
            ];

            await mentor.save();

            response.status(200).send(mentor);


        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    },
    showMentor: async (request, response) => {
        try {
            const mentor = request.params.mentorId;
            const showMentor = await Mentor.findOne({ _id: mentor }).populate('students', 'name');

            response.status(200).send(showMentor);
            
        } catch (error) {
            response.status(500).send({ message: error.message });
        }
    }
}

//export
module.exports = mentorController;