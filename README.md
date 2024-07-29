# WEB DEVELOPER TASK

## Mentor and Student Assigning with Database

1. Write API to create Mentor

POST `/mentors`

2. Write API to create Student

POST `/students`

3. Write API to assign a Student to Mentor

POST `/mentors/:mentorId/assign`

4. Write API to Assign/Change Mentor for particular Student

GET `/students/:studentId`

5. Write API to show all Students for a particular mentor

GET `/mentors/:mentorId/students`

6. Write API to show the previously assigned mentor for a particular Student

GET `students/:studentId/showPrevMentors`