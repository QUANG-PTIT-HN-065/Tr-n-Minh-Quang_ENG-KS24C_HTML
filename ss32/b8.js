function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    let li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span> 
                    <div>
                        <button class="edit-button" onclick="editTask(this)">Sửa</button>
                    <button class="button" onclick="deleteTask(this)">Xóa</button>
                    </div>`;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function deleteTask(button) {
    if (confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?")) {
        button.parentElement.parentElement.remove();
    }
}
function editTask(button) {
    let li = button.parentElement.parentElement;
    let span = li.querySelector("span");
    let newTask = prompt("Chỉnh sửa nhiệm vụ:", span.innerText);
    if (newTask !== null && newTask.trim() !== "") {
        span.innerText = newTask.trim();
    }
}