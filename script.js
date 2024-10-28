document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') return;

    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.style.border="none";
    completeButton.style.padding = "5px";
    completeButton.style.borderRadius = "5px";
    completeButton.addEventListener('click', function() {
        taskText.classList.toggle('completed');
    });

    completeButton.addEventListener('mouseover', () => {
        completeButton.style.backgroundColor = '#C9E9D2';
    });

    completeButton.addEventListener('mouseout', () => {
        completeButton.style.backgroundColor = '';
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.border="none";
    deleteButton.style.padding = "5px";
    deleteButton.style.borderRadius = "5px";
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    deleteButton.addEventListener('mouseover', () =>{
        deleteButton.style.backgroundColor = '#C9E9D2';
        deleteButton.style.color = 'black';
    });
    deleteButton.addEventListener('mouseout', () => {
        deleteButton.style.backgroundColor = '';
    });

    listItem.appendChild(taskText);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
});
