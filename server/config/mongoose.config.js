const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peopledb')
   .then(() => console.log("Database connection established!"))
   .catch(err => console.log("There is an error:", err));