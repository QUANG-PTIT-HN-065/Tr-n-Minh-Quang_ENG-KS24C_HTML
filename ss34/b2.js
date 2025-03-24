let courses = JSON.parse(localStorage.getItem('courses')) || [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm th`',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci Ớt Ớt',
    }
];

function saveCourses() {
    localStorage.setItem('courses', JSON.stringify(courses));
}

function showCourses() {
    let show = document.getElementById("taskTableBody");
    show.innerHTML = "";
    courses.forEach((course) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${course.id}</td>
            <td>${course.content}</td>
            <td>${course.dueDate}</td>
            <td>${course.status}</td>
            <td>${course.assignedTo}</td>
            <td>
                <button onclick="changeStatus(${course.id})">Change Status</button>
                <button onclick="deleteCourse(${course.id})">Delete</button>
            </td>
        `;
        show.appendChild(tr);
    });
}

function changeStatus(id) {
    const course = courses.find(c => c.id === id);
    if (course) {
        course.status = course.status === "Pending" ? "Completed" : "Pending";
        saveCourses();
        showCourses();
    }
}

function deleteCourse(id) {
    courses = courses.filter(c => c.id !== id);
    saveCourses();
    showCourses();
}

function addCourse() {
    event.preventDefault();
    const content = document.getElementById("content").value;
    const dueDate = document.getElementById("dueDate").value;
    const assignedTo = document.getElementById("assignedTo").value;
    const maxId = courses.length > 0 ? Math.max(...courses.map(course => course.id)) : 0;
    const id = maxId + 1;
    courses.push({ id, content, dueDate, status: "Pending", assignedTo });
    courses.sort((a, b) => a.id - b.id);
    localStorage.setItem('courses', JSON.stringify(courses));
    showCourses();
}
showCourses();