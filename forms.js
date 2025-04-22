const addTask = document.querySelector('.add-task-button');
let p = document.querySelector('.para');
const taskInput = document.querySelector('.todo-input');

if(taskInput) {
        addTask.addEventListener('click', () => {
                p.innerHTML = taskInput.value;
            
        })
}