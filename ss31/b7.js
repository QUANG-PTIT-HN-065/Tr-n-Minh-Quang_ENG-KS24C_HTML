let todolLIst = [
    {
        id: 1,
        title: 'đi chơi',
        completed: false
    },
    {
        id: 2,
        title: 'đi học',
        completed: true
    },
    {
        id: 3,
        title: 'đi làm',
        completed: false
    },
    {
        id: 4,
        title: 'đi ngủ',
        completed: true
    }
]
const ul = document.getElementById("myUL");
// function inTOdo(params) {
//     todolLIst.forEach((todo, index) => {
//         let li = document.createElement("li"); 
//         if (index === 1) {
//             li.classList.add("checked");
//             li.textContent = "Pay bills";
//         } else {
//             li.textContent = todo.title;
//         }

//         let closeBtn = document.createElement("span");
//         closeBtn.classList.add("close");
//         closeBtn.textContent = "X";
//         closeBtn.setAttribute("onclick", "deleteTodo(this)"); 

//         li.appendChild(closeBtn);
//         ul.appendChild(li);
//     });
// }
function inTOdo() {
    ul.innerHTML = "";

    todolLIst.forEach((todo, index) => {
        let li = document.createElement("li");
        li.setAttribute("data-id", todo.id); 

        if (index === 1) {
            li.classList.add("checked");
            li.textContent = "Pay bills";
        } else {
            li.textContent = todo.title;
        }
        let closeBtn = document.createElement("span");
        closeBtn.classList.add("close");
        closeBtn.textContent = "X";
        closeBtn.setAttribute("onclick", `deleteTodo(${todo.id})`); 

        li.appendChild(closeBtn);
        ul.appendChild(li);
    });
}
function addTodo() {
    ul.innerHTML = "";   
   let id = todolLIst.length + 1;
   let title = document.getElementById("myInput").value;
   console.log(title);
    let todo = {
         id: id,
         title: title,
         completed: false
    }
    todolLIst.push(todo);
    inTOdo();
}
inTOdo();
function deleteTodo(id) {
    todolLIst = todolLIst.filter(todo => todo.id !== id);
    inTOdo();
}