const taskList = document.getElementById('tasks__list');
const taskInput = document.getElementById("task__input");
const btn = document.getElementById("tasks__add");
const taskRemove = document.querySelectorAll(".task__remove")

const addTask1 = (e) => {
    const taskText = taskInput.value.trim();
    const html = `<div class="task">
                    <div class="task__title">${taskText}</div>
                    <a href="#" class="task__remove">&times;</a>
                  </div>`;
    if (e.key === 'Enter' && taskText !== '') {               
        taskList.insertAdjacentHTML('beforeEnd', html);
        taskInput.value = '';
        e.preventDefault();
    }
}
const addTask2 = (e) => {
    const taskText = taskInput.value.trim();
    const html = `<div class="task">
                    <div class="task__title">${taskText}</div>
                    <a href="#" class="task__remove">&times;</a>
                  </div>`;
    if (taskText !== '') {               
        taskList.insertAdjacentHTML('beforeEnd', html);
        taskInput.value = '';
        e.preventDefault();
    }
}
taskInput.addEventListener('keydown', addTask1);
btn.addEventListener('click', addTask2);

const deleteTask = () => {
    for (let i = 0; i < taskRemove.length; i++) {
        if (taskRemove[i].onClick) {
            let task = taskRemove[i].closest(".task");
            task.remove();
        }
    }
}
taskList.addEventListener('click', deleteTask)
