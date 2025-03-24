let toDoLit = [];
function getToDoLit() {
    let data = localStorage.getItem('toDoLit');
    if (data) {
        toDoLit = JSON.parse(data);
    } else {
        toDoLit = [];
    }
    console.log(toDoLit);
}
function showToDoLit() {  
    getToDoLit();
    let show = document.getElementById("taskList");
    show.innerHTML = "";
    toDoLit.forEach((task) => {
        let li = document.createElement("li");
        li.innerHTML = `<span>${task.content}</span> 
                    <div>
                    <button class="button" onclick="deleteTask(this)">Xóa</button>
                    </div>`;
        show.appendChild(li);
    });
}
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    let li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span> 
                    <div>
                    <button class="button" onclick="deleteTask(this)">Xóa</button>
                    </div>`;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
    toDoLit.push({ content: taskText });
    saveCourses();
}

function deleteTask(button) {
    if (confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?")) {
        let li = button.parentElement.parentElement;
        let taskText = li.querySelector("span").innerText;
        toDoLit = toDoLit.filter(task => task.content !== taskText);
        saveCourses();
        li.remove();
    }
}
function saveCourses() {
    localStorage.setItem('toDoLit', JSON.stringify(toDoLit));
}
showToDoLit();