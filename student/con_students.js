const mongoose = require('mongoose');
// const students = require('student.js')

mongoose.connect("mongodb://localhost:27017/students", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => { console.log('connection successful')})
.catch( (err) => { console.log(err, "Connection failed"); 
}) 