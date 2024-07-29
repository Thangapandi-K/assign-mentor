//import express
const express = require('express');

//import controller
const studentController = require('../controllers/studentController');

//import express router
const studentRouter = express.Router();

//define routes
studentRouter.post('/', studentController.createStudent);
studentRouter.get('/', studentController.getAllStudents);
studentRouter.get('/:studentId', studentController.assignMentor);
studentRouter.get('/:studentId/showPrevMentors', studentController.showPrevMentors);



//export
module.exports = studentRouter;