
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    let li = document.createElement("li");
    li.innerHTML = taskText + ' <button class="button" onclick="deleteTask(this)">Xóa</button>';
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
function deleteTask(button) {
    if (confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?")) {
        button.parentElement.remove();
    }
}