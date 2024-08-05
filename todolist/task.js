document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task-input');
    const addTaskBtn = document.getElementById('add-task-btn');

    function addTask(taskContent) {
        const task = document.createElement('div');
        task.className = 'task';

        const taskContentDiv = document.createElement('div');
        taskContentDiv.className = 'task-content';
        taskContentDiv.innerText = taskContent;
        task.appendChild(taskContentDiv);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.innerText = 'Edit';
        task.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerText = 'Delete';
        task.appendChild(deleteBtn);

        taskList.appendChild(task);

        editBtn.addEventListener('click', () => {
            const newContent = prompt('Edit task:', taskContentDiv.innerText);
            if (newContent) {
                taskContentDiv.innerText = newContent;
            }
        });

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(task);
        });
    }

    addTaskBtn.addEventListener('click', () => {
        const taskContent = newTaskInput.value.trim();
        if (taskContent) {
            addTask(taskContent);
            newTaskInput.value = '';
        }
    });
});
