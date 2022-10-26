let todos = [
]


const express = require('express')
const cors = require ('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.listen(8080, function() {
    console.log('Server is running...')
})

app.get('/todos', (req, res) => {
    res.json(todos)
})

app.post('/todos', (req, res) => {
    console.log('Hello World?')
    const todo = {title: req.body.title, priority: req.body.priority, date_created: req.body.date_created}
    todos.push(todo)
    res.json({message: 'New todo item has been added!'})
})