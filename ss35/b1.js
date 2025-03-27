let toDoList = []; 

function getToDoList() {
    let data = localStorage.getItem("toDoList");
    toDoList = data ? JSON.parse(data) : [];
    console.log(toDoList);
}

function showToDoList() {
    getToDoList();
    let show = document.getElementById("taskList");
    show.innerHTML = "";
    toDoList.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<span>${task.content}</span> 
                        <div>
                        <button class="edit-button" onclick="editTask(${index})">Sửa</button>
                        <button class="button" onclick="deleteTask(${index})">Xóa</button>
                        </div>`;
        show.appendChild(li);
    });
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    toDoList.push({ content: taskText }); 
    saveTasks();
    showToDoList(); 
    taskInput.value = "";
}

function deleteTask(index) {
    if (confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?")) {
        toDoList.splice(index, 1); 
        saveTasks();
        showToDoList(); 
    }
}

function saveTasks() {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

function editTask(index) {
    let newTask = prompt("Chỉnh sửa nhiệm vụ:", toDoList[index].content);
    if (newTask !== null && newTask.trim() !== "") {
        toDoList[index].content = newTask.trim(); 
        saveTasks();
        showToDoList(); 
    }
}

showToDoList();
