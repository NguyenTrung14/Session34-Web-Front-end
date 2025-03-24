const localstorage=[
    {email:"nguyentrung27092006@gmail.com", password:"nguyentrung2709"}
];


let email=document.getElementById("email");
let password=document.getElementById("password");
let confirmPassword=document.getElementById("confirmPassword");


function sign_up(event) {
    event.preventDefault();
    let mail = email.value.trim();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let check = users.find(user => user.email === mail);
    if (check) {
        alert(`Đã tồn tại email này, vui lòng nhập dữ liệu khác`);
        return;
    } else {
        let input1 = password.value.trim();
        let input2 = confirmPassword.value.trim();
        if (input1 === input2) {
            let user = { email: mail, password: input1 };
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            alert(`Đăng ký thành công!`);
            email.value = "";
            password.value = "";
            confirmPassword.value = "";
            window.location.href = "ss34-ex3.html";
        } else {
            alert(`Vui lòng nhập chính xác mật khẩu`);
        }
    }
}


function sign_in(event) {
    event.preventDefault();
    let mail = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.email === mail);
    if (user) {
        if (user.password === pass) {
            alert(`Đăng nhập thành công`);
            window.location.href = "http://www.mysever.com";
        } else {
            alert(`Sai mật khẩu`);
        }
    } else {
        alert(`Sai tên đăng nhập`);
    }
}