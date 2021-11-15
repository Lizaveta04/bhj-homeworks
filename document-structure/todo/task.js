const taskList = document.getElementById('tasks__list');
const taskInput = document.getElementById("task__input");
const btn = document.getElementById("tasks__add");
const taskRemove = document.querySelectorAll(".task__remove")
const tasks = document.querySelectorAll(".task")

const addTask = (e) => {
    const task = `<div class="task">
                    <div class="task__title">${taskInput.value}</div>
                    <a href="#" class="task__remove">&times;</a>
                  </div>`;
    if (e.key === 'Enter' && taskInput.value !== ' ') {               
        taskList.insertAdjacentHTML('beforeEnd', task);
        taskInput.value = ' ';
    }
}
taskInput.addEventListener('keydown', addTask);
btn.addEventListener('click', addTask);

for (let i = 0; i < taskRemove.length; i++) {
    const deleteTask = (e) => {
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].remove();
        }
    }
    taskRemove[i].addEventListener('click', deleteTask)
}
