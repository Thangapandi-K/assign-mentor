//import mongoose
const mongoose = require('mongoose');

//import express app
const app = require('./app');
const { MONGODB_URI, PORT } = require('./utils/config');


// to check code running
console.log('Connecting to MongoDB...');


//connect to MongoDB

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB..!');

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/`)
    })
})
.catch((error) => {
    console.log('Error connecting MongoDB : ', error.message);
});
