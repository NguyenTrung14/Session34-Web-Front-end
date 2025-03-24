let employees = JSON.parse(localStorage.getItem("employees")) || [];
renderEmployees(employees);

function addEmployee() {
    let name = document.getElementById("name").value.trim();
    let position = document.getElementById("position").value.trim();
    if (!name || !position) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push({ name, position });
    localStorage.setItem("employees", JSON.stringify(employees));
    renderEmployees(employees);
    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
}

function renderEmployees(employees) {
    let list = document.getElementById("employeeList");
    list.innerHTML = "";
    employees.forEach((emp, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${emp.name}</td>
            <td>${emp.position}</td>
        </tr>`;
        list.innerHTML += row;
    });
}
        