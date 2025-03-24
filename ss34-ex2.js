const courses = [
    { id: 1, content: 'Learn Javascript Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Anh Bách' },
    { id: 2, content: 'Learn Javascript Session 2', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Lâm thì' },
    { id: 3, content: 'Learn CSS Session 1', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Hiếu Ci ớt ớt' },
];

function render(list = courses) {
    let infor = document.getElementById("mainTable");
    infor.innerHTML = "";
    list.forEach((x, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${x.id}</td>
            <td>${x.content}</td>
            <td>${x.dueDate}</td>
            <td>${x.status}</td>
            <td>${x.assignedTo}</td>
            <td><button onclick="editTask(${index})">Sửa</button></td>
            <td><button onclick="deleteTask(${index})">Xóa</button></td>
        `;
        infor.appendChild(row);
    });
}


function addTask() {
    const content = document.getElementById("content").value;
    const dueDate = document.getElementById("date").value;
    const status = document.getElementById("status").value;
    const assignedTo = document.getElementById("assigned").value;
    if (!content || !dueDate || status === "...." || !assignedTo) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    const newTask = {
        id: courses.length + 1,
        content,
        dueDate,
        status,
        assignedTo,
    };
    courses.push(newTask);
    render();
    document.querySelector("form").reset();
}


function deleteTask(index) {
    if (confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?")) {
        courses.splice(index, 1);
        render();
    }
}


function editTask(index) {
    const task = courses[index];
    document.getElementById("content").value = task.content;
    document.getElementById("date").value = task.dueDate;
    document.getElementById("status").value = task.status;
    document.getElementById("assigned").value = task.assignedTo;
    document.querySelector(".btn-primary").innerText = "Cập nhật";
    document.querySelector(".btn-primary").setAttribute("onclick", `updateTask(${index})`);
}

function updateTask(index) {
    courses[index].content = document.getElementById("content").value;
    courses[index].dueDate = document.getElementById("date").value;
    courses[index].status = document.getElementById("status").value;
    courses[index].assignedTo = document.getElementById("assigned").value;
    render();
    document.querySelector("form").reset();
    document.querySelector(".btn-primary").innerText = "Submit";
    document.querySelector(".btn-primary").setAttribute("onclick", "addTask()");
}
render(courses);