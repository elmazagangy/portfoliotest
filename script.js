
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    
    taskInput.value = '';
  } else {
    alert('Please enter a valid task.');
  }
});
