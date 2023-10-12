let form = document.querySelector('form');
let input = document.querySelector('#user-task');
let todoList = document.querySelector('.todo-list');

let menuBar = document.querySelector('.menu-bar');

let tasks = document.querySelectorAll('.todo-list .task'); 

const stateOptions = document.querySelectorAll('.option');

const clearCompleted = document.querySelector('.clear');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    addTask();
    input.value = "";

});

for (let task of tasks) {
  task.addEventListener('click', () => {
    task.classList.toggle('done');
    updateCount();
  });
};

updateCount();

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
  addTask.addEventListener('click',() => {
      addTask.classList.toggle('done');
      updateCount();
  });

  updateCount();
};

// function update() {
//     let tasksDone = document.querySelectorAll('done');
//     let totalTasks = document.querySelectorAll('.todo-list .task'); 

//     let itemsLeft = document.querySelector('.items-left');
//     let count = totalTasks.length - tasksDone.length;
//     itemsLeft.innerHTML = `
//     <p>${count} items left</p>
//     `;
// }



todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('cross')) {
    const parentDiv = e.target.closest('.task');
    if (parentDiv) {
      parentDiv.remove();
      console.log('removed');
      updateCount();
    }
  }
});

function updateCount() {
  const tasks = document.querySelectorAll('.todo-list .task');
  const doneTasks = document.querySelectorAll('.todo-list .task.done');
  const itemsLeft = tasks.length - doneTasks.length;

  const itemsCount = document.querySelector('.items-left');

  itemsCount.innerHTML = `
  <p>${itemsLeft} items left</p>
  `;


};

stateOptions.forEach((option) => {
  option.addEventListener('click', () => {
    stateOptions.forEach((opt) => {
      opt.classList.remove('present');
    });

    option.classList.add('present');

    const optionClass = option.textContent.toLowerCase();

    const tasks = document.querySelectorAll('.todo-list .task');
    tasks.forEach((task) => {
      if (optionClass === 'all') {
        task.style.display = '';
        updateCount();
      } else if (optionClass === 'active' && !task.classList.contains('done')) {
        task.style.display = '';
        updateCount();
      } else if (optionClass === 'completed' && task.classList.contains('done')) {
        task.style.display = '';
        completedCount();
      } else {
        task.style.display = 'none';
      }
    });
  });
});

function completedCount() {
  const doneTasks = document.querySelectorAll('.todo-list .task.done');
  const itemsCount = document.querySelector('.items-left');

  itemsCount.innerHTML = `
  <p>${doneTasks.length} items left</p>
  `;

}

clearCompleted.addEventListener('click', () => {
    const clearTasks = document.querySelectorAll('.task.done');
    clearTasks.forEach((task)=> {
      task.remove();
    });

    completedCount();
    updateCount();


});

let darkThemeButton = document.querySelector('.moon');
darkThemeButton.addEventListener('click', () => {
    let lightThemes = document.querySelectorAll('.theme-light');
    lightThemes.forEach((ltheme)=> {
      ltheme.style.display = 'none'; 
    });

    let darkThemes = document.querySelectorAll('.theme-dark');
    darkThemes.forEach((dtheme)=>{
      dtheme.style.display = 'flex';
    });

    document.body.classList.add('darkMode');
});

let lightThemeButton = document.querySelector('.sun');
lightThemeButton.addEventListener('click', () => {
    let darkThemes = document.querySelectorAll('.theme-dark');
    darkThemes.forEach((dtheme)=> {
      dtheme.style.display = 'none'; 
    });

    let lightThemes = document.querySelectorAll('.theme-light');
    lightThemes.forEach((ltheme)=>{
      ltheme.style.display = 'flex';
    });

    document.body.classList.remove('darkMode');
});
