const express = require("express");
const con = require('./con_students')
const Student = require("./student")
const app = express();
// const port = process.env.PORT || 3004;

app.use(express.json());

app.post('/students', (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then( () => { res.status(201).send(user);})
    .catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(3005, () => {
    console.log('connected')
})



   




