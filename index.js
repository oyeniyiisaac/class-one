const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 4000;
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



app.set('view engine', 'ejs') // use to call the engine we are using

app.get('/', (req, res) => {
    res.send('welcome to my Express server!')
})
app.get('/ejs', (req, res) => {
    res.render('index.ejs', {name: 'John Doe'})
})
app.get('/form', (req, res) => {
    res.render('form.ejs')
})
app.get('/signin', (req, res) => {
    res.render('signIn.ejs')
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
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
