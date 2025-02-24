document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector("button");
  const taskNameInput = document.querySelector("input[type='text']");
  const taskDescriptionInput = document.querySelector("textarea");
  const taskDeadlineInput = document.querySelector("input[type='datetime-local']");
  const taskList = document.querySelector(".list-tugas");

  addButton.addEventListener("click", function () {
    const taskName = taskNameInput.value.trim();
    const taskDescription = taskDescriptionInput.value.trim();
    const taskDeadline = taskDeadlineInput.value.trim();

    if (taskName && taskDeadline) {
      // menghapus tulisan "tugas kosong"
      const emptyMessageElement = document.getElementById("tgskosong");
      if (emptyMessageElement) {
        emptyMessageElement.remove();
      }

      // Buat Tugas Baru
      const taskElement = document.createElement("div");
      taskElement.classList.add("tugas");
      taskElement.innerHTML = `
        <p><b>Nama Tugas:</b> ${taskName}</p>
        <p><b>Deskripsi:</b> ${taskDescription}</p>
        <p><b>Deadline:</b> ${taskDeadline}</p>
        <button class="delete-btn">Hapus</button>
      `;
      
      // tomboldelete
      const deleteButton = taskElement.querySelector('.delete-btn');
      deleteButton.addEventListener('click', function() {
        taskElement.remove();
        
        //tampilan tgs kosong
        if (taskList.children.length === 0) {
          const emptyMessage = document.createElement('h2');
          emptyMessage.id = 'tgskosong';
          emptyMessage.style.textAlign = 'center';
          emptyMessage.textContent = 'Tugas Kosong';
          taskList.parentNode.insertBefore(emptyMessage, taskList);
        }
      });

      taskList.appendChild(taskElement);

      // Mengkosongkan form setelah submit
      taskNameInput.value = "";
      taskDescriptionInput.value = "";
      taskDeadlineInput.value = "";
    } else {
      alert("Form tidak boleh kosong");
    }
  });
});
