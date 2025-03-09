let tasks = [];

function loadData() {
  const data = localStorage.getItem("tasks");
  if (data) {
    tasks = JSON.parse(data);
  }
}

function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.querySelector(".list-tugas");
  const emptyMessage = document.getElementById("empty-message");
  const addButton = document.querySelector("button");
  const taskNameInput = document.querySelector("input[type='text']");
  const taskDescriptionInput = document.querySelector("textarea");
  const taskDeadlineInput = document.querySelector("input[type='datetime-local']");

  function renderTasks() {
    taskList.innerHTML = "";
    
    if (tasks.length === 0) {
      emptyMessage.style.display = "block";
    } else {
      emptyMessage.style.display = "none";
    }

    tasks.forEach((task, index) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("tugas");
      taskElement.innerHTML = `
        <p><b>Nama Tugas:</b> ${task.name}</p>
        <p><b>Deskripsi:</b> ${task.description}</p>
        <p><b>Deadline:</b> ${task.deadline}</p>
      `;
      
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Hapus";
      deleteButton.classList.add("delete-btn");
      deleteButton.addEventListener("click", function () {
        deleteTask(index);
      });
      
      taskElement.appendChild(deleteButton);
      taskList.appendChild(taskElement);
    });
  }

  function addTask() {
    const taskName = taskNameInput.value.trim();
    const taskDescription = taskDescriptionInput.value.trim();
    const taskDeadline = taskDeadlineInput.value.trim();
    
    if (taskName && taskDeadline) {
      const newTask = {
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline,
      };
      tasks.push(newTask);
      saveData();
      renderTasks();

      taskNameInput.value = "";
      taskDescriptionInput.value = "";
      taskDeadlineInput.value = "";
    } else {
      alert("Form tidak boleh kosong");
    }
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    saveData();
    renderTasks();
  }

  addButton.addEventListener("click", addTask);

  loadData();
  renderTasks();
});
