let form = document.querySelector('form');
let input = document.querySelector('#user-task');
let todoList = document.querySelector('.todo-list');

let menuBar = document.querySelector('.menu-bar');

let tasks = document.querySelectorAll('.todo-list .task'); 

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    addTask();

    input.value = "";
});

function addTask() {
    let task = input.value;
    let addTask = document.createElement('div');
    addTask.classList.add('task');

    addTask.innerHTML = `
    <div class="circle">
        <img src="images/icon-check.svg">
    </div>
    <span>${task}</span>
    <img src="images/icon-cross.svg" class="cross"> 
    `;

    menuBar.before(addTask);
    update();
}

function update() {
    tasks = document.querySelectorAll('.todo-list .task'); 

    for (let task of tasks) {
        task.addEventListener('click',() => {
            task.classList.toggle('done');
            console.log(task);
        });
    };
}
