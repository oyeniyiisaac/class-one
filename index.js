const express = require('express')
const ejs = require('ejs')
const app = express()
const mongoose = require("mongoose");
const userModel = require('./models/user.model');
const port = 4000;
const dbURL = "mongodb+srv://mercy:mercy12@cluster0.fr5sm3i.mongodb.net/?appName=Cluster0"
// const student = [
//     {
//         id: 1,
//         name: 'Michael',
//         age: 20,
//         course: 'Computer Science'
//     },
//     {
//         id: 2,
//         name: 'Sarah',
//         age: 22,
//         course: 'Business Administration'
//     },
//     {
//         id: 3,
//         name: 'David',
//         age: 19,
//         course: 'Mechanical Engineering'
//     },
//     {
//         id: 4,
//         name: 'Emily',
//         age: 21,
//         course: 'Psychology'
//     },
//     {
//         id: 5,
//         name: 'James',
//         age: 23,
//         course: 'Economics'
//     },
//     {
//         id: 6,
//         name: 'Olivia',
//         age: 20,
//         course: 'Biology'
//     },
//     {
//         id: 7,
//         name: 'Daniel',
//         age: 22,
//         course: 'Political Science'
//     },
//     {
//         id: 8,
//         name: 'Sophia',
//         age: 19,
//         course: 'Art History'
//     },
//     {
//         id: 9,
//         name: 'Matthew',
//         age: 21,
//         course: 'Mathematics'
//     },
//     {
//         id: 10,
//         name: 'Ava',
//         age: 23,
//         course: 'Sociology'
//     }

// ]
const users = [];

app.set('view engine', 'ejs') // use to call the engine we are using
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
    res.send('welcome to my Express server!')
})
app.get('/ejs', (req, res) => {
    res.render('index.ejs', { name: 'John Doe' })
})
app.get('/form', (req, res) => {
    res.render('form.ejs')
})
app.get('/signin', (req, res) => {
    res.render('signIn.ejs')
})
app.post('/submit', (req, res) => {
    // const user = req.body
    const { firstName, lastName, email, password } = req.body;
    // users.push(user);
    // res.send('form submitted successfully')
    const newStudent = new userModel(req.body)
    newStudent.save()
        .then((result) => {
            console.log(result)
            res.render('submit', { name: result.firstName })
        })
        .catch((err) => {
            console.log(err)
        })
    // console.log(result);

})

app.get('/table', async (req, res) => {
    try {
        const students = await userModel.find()
        console.log(students)
        res.render("table", {students})
    } catch (err) {
        console.log(err)
    }
})

// app.get('/homepage', (req, res) => {
//     res.send('welcome to my homepage')
// })
// app.get('/about', (req, res) => {
//     // res.sendFile(index.html)
//     res.sendFile(__dirname + '/index.html')
//     console.log(__dirname);
// })
// app.get('/api', (req, res) => {
//     res.json(student)
// })
mongoose.connect(dbURL, { dbName: 'user' })
    .then(() => {
    console.log('mongoDb connected');
})
    .catch((err) => {
        console.log(err);

    })



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
