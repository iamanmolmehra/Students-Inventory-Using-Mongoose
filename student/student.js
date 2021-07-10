const  mongoose = require('mongoose')
const  validator = require('validator')

const studentSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        minlength : 3
    },
    email : {
        type : String,
        required : true,
        unique : [true,"Email already exists"],
        validator(value){
            if (validator.isEmail(value)){
                throw new Error('email is invalid')
            } }
    },
    phone : {
        type : Number,
        min: 5,
        required : true,
        unique : true
    },
    address: {
        type : String,
        required:true
    }
})

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;