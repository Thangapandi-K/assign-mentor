//import dotenv
require('dotenv').config();

//create variables
const MONGODB_URI = process.env.MONGODB_URI;

const PORT = process.env.PORT;

//export
module.exports = {
    MONGODB_URI,
    PORT
};