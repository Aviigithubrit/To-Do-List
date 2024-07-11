// JavaScript logic

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Add task function
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = taskText;
  
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-end';
        deleteBtn.textContent = 'Delete';
  
        // Event listener to delete task
        deleteBtn.addEventListener('click', function() {
          li.remove();
        });
  
        // Event listener to mark task as completed
        li.addEventListener('click', function() {
          li.classList.toggle('completed');
        });
  
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
  
        taskInput.value = '';
      }
    }
  
    // Event listener for add task button
    addTaskBtn.addEventListener('click', addTask);
  
    // Event listener for pressing Enter in input
    taskInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  });
  