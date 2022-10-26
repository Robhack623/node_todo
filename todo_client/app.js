const todoTextBox = document.getElementById('todoTextBox')
const addButton = document.getElementById('addButton')
const pendingTasks = document.getElementById('pendingTasks')
const priority = document.getElementById('priority')
const dateCreated = document.getElementById('dateCreated')
const clickDelete = document.getElementById('clickDelete')

function success() {
    if(document.getElementById("todoTextBox").value==="") { 
           document.getElementById('addButton').disabled = true; 
       } else { 
           document.getElementById('addButton').disabled = false;
       }
}


async function getTodo() {
    const response = await fetch('http://localhost:8080/todos')
    const todos = await response.json()
    console.log(todos)
    let todo = todos.map(function(task){
        return `
        <p id='clickDelete' class='tasks'>${task.title} - ${task.priority} - ${task.date_created}</p>
        `
    }) 
    pendingTasks.innerHTML = todo.join('')
}
getTodo()

addButton.addEventListener('click', function(){

    const todos = {title: todoTextBox.value, priority: priority.value, date_created: dateCreated.value}
    fetch('http://localhost:8080/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todos)
    }).then(response => response.json())
    .then(result => getTodo())
    
})

/*clickDelete.addEventListener('click', function(){
    fetch('http://localhost:8080/todos', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: null
    }).then(response => response.json())
    .then(response => console.log(response))
})*/
