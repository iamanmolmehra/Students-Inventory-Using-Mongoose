const mongoose = require('mongoose');
const validator = require('validator');

// creation of new collection in new db
mongoose.connect('mongodb://localhost:27017/Anmol', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then( () => console.log('connected'))
.catch((err) => console.log(err));

// a mongoose schema defining the structure of documents
const webseriesSchema = mongoose.Schema(  {
    name: {
        type: String,
        required : true,
        lowercase: true,
        trim:true,
        minlength : [3, "write a word greater than three letters"] ,
        maxlength :  30
    },
    year:{
        type: Number,
        min: 1970,
        max: 2025
    },  
    rating : {
        type: Number,
        validator(value){
            if (value < 0){
                throw new error("rating count can't be negative")
            }
        }

    },
    language: {
        type: String,
        enum: ['Hindi', 'English', 'Marathi', 'French','Japanese']
    },
    active : Boolean,
    director : {
        type: String,  
    }, 
    email: {
        type: String,
        required : true,
        unique : true,
        validator(value){
            if (validator.isEmail(value)){
                throw new Error('email is invalid')
            }
        }
    },
    date : {
        type: Date,
        default: Date.now
    }
} )

// Collection creation
const Webseries = new mongoose.model("Webseries", webseriesSchema)

// const func = async () => {
//         const res= await Webseries.find(

//         )
//     console.log(res)
// }

// insertion
    const func = async () => {
        try {
            const res= await Webseries.insertMany({
            // _id : 1,
            name: "GOT",
            year: 2011,
            rating : 8.8,
            language: "English",
            active : true,
            director : "khalisi",
            email: "khalisgmail.c"
            }, 
            {name: "Breathe",
            year: 2019,
            rating : 8.2,
            language: "English",
            active : true,
            director : "Shaana"
        })
            console.log(res)
        }   catch (err) {
            console.log(err);
        }  
}
    
// updation
// const func = async () => {
//         const res= await Webseries.updateOne(
//             {name: "Tandav"}, {$set: {year: 2020}}  
//         ) 
    
//     console.log(res)
//     

// deletion
// const func = async () => {
//     const res= await Webseries.deleteOne(
//         {name: "Tandav"}
//     ) 

// console.log(res)
// }

func()
