//import express
const express = require('express');

//import controller
const mentorController = require('../controllers/mentorController');

//import express router
const mentorRouter = express.Router();

//define routes
mentorRouter.post('/', mentorController.createMentor);
mentorRouter.get('/', mentorController.getAllMentors);
mentorRouter.post('/:mentorId/assign', mentorController.assignStudent);
mentorRouter.get('/:mentorId/students', mentorController.showMentor);

//export
module.exports = mentorRouter;