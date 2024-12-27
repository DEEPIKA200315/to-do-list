// Select important elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Event listener to add task
addTaskBtn.addEventListener('click', addTask);

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create task item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Create the task text span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);

    // Mark task as completed when clicked
    taskSpan.addEventListener('click', function() {
        taskSpan.classList.toggle('completed');
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    taskItem.appendChild(deleteBtn);

    // Delete task when delete button is clicked
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    // Add task item to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}
