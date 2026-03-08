let tasks = JSON.parse(localStorage.getItem("tasks")) || []

let view = "grid"

function saveTask(){

let title = document.getElementById("title").value
let date = document.getElementById("date").value

if(title === "" || date === "") return

tasks.push({

title,
date,
complete:false

})

updateStorage()
render()

document.getElementById("title").value=""
document.getElementById("date").value=""

}

function updateStorage(){

localStorage.setItem("tasks",JSON.stringify(tasks))

}

function toggleView(){

let container = document.getElementById("tasks")

if(view === "grid"){

view="list"
container.className="list-view"

}else{

view="grid"
container.className="grid-view"

}

}

function render(){

let container = document.getElementById("tasks")

let search = document.getElementById("search").value?.toLowerCase() || ""
let filter = document.getElementById("filter").value

container.innerHTML=""

tasks.forEach((task,index)=>{

let now = new Date()
let taskDate = new Date(task.date)

let status="upcoming"

if(task.complete){

status="complete"

}else if(taskDate < now){

status="overdue"

}

if(filter !== "all" && filter !== status) return
if(!task.title.toLowerCase().includes(search)) return

let html = `

<div class="task-card">

<div class="task-title">${task.title}</div>

<div class="meta">${taskDate.toLocaleString()}</div>

<span class="status ${status}">${status}</span>

<div class="actions">

<button onclick="completeTask(${index})">✔</button>
<button onclick="editTask(${index})">Edit</button>
<button onclick="deleteTask(${index})">✖</button>

</div>

</div>

`

container.innerHTML += html

})

}

function completeTask(i){

tasks[i].complete = true
updateStorage()
render()

}

function deleteTask(i){

tasks.splice(i,1)
updateStorage()
render()

}

function editTask(i){

let task = tasks[i]

document.getElementById("title").value = task.title
document.getElementById("date").value = task.date

tasks.splice(i,1)

updateStorage()
render()

}

document.getElementById("search").addEventListener("input",render)
document.getElementById("filter").addEventListener("change",render)

render()