// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    // Get the value from the input field
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;

    // If the task is not empty, add it to the tasks array
    if (task) {
        tasks.push(task); // Add the new task to the array
        taskInput.value = ''; // Clear the input field
        displayTasks(); // Update the displayed task list
    }
}

// Function to display tasks in the DOM
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the current list

    // Loop through the tasks array and create list items for each task
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        // Add a delete button for each task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove the task from the array
    displayTasks(); // Update the displayed task list
}