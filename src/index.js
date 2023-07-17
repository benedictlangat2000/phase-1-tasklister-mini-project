document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

// Get the input and button elements
const taskInput = document.getElementById('taskInput');
const submitBtn = document.getElementById('submitBtn');
const taskList = document.getElementById('taskList');
const prioritySelect = document.getElementById('prioritySelect');
const sortBtn = document.getElementById('sortBtn');


// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent page refresh

  const task = taskInput.value; // Get the task input value

  if (task.trim() !== '') { // Check if the task is not empty
    const li = document.createElement('li'); // Create a new list item
    li.textContent = task; // Set the task as the list item content
    taskList.appendChild(li); // Add the list item to the task list
    taskInput.value = ''; // Clear the input field
  }
}

// Attach the handleSubmit function to the form submit event
submitBtn.addEventListener('click', handleSubmit);
// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent page refresh

  const task = taskInput.value; // Get the task input value
  const priority = prioritySelect.value; // Get the priority value

  if (task.trim() !== '') { // Check if the task is not empty
    const li = document.createElement('li'); // Create a new list item
    li.textContent = task; // Set the task as the list item content
    li.style.color = getPriorityColor(priority); // Set the color based on priority

    const deleteBtn = document.createElement('button'); // Create a delete button
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      li.remove(); // Remove the task when the delete button is clicked
    });

    li.appendChild(deleteBtn); // Add the delete button to the list item
    taskList.appendChild(li); // Add the list item to the task list
    taskInput.value = ''; // Clear the input field
  }
}

// Function to get the color based on priority
function getPriorityColor(priority) {
  switch (priority) {
    case 'high':
      return 'red';
    case 'medium':
      return 'yellow';
    case 'low':
      return 'green';
    default:
      return 'black';
  }
}

// Function to sort tasks based on priority
function sortTasks() {
  const tasks = Array.from(taskList.children);
}
