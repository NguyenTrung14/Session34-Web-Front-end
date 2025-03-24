function confirmAdd(){
    let input = document.getElementById("addTask");
    let task=input.value.trim();
    if(task==""){
        alert("Nhiệm vụ không được để trống!");
        return;
    }
    let list=document.getElementById("taskList");
    let item=document.createElement("li");
    item.innerHTML=`<br>${task} <button class="delete-btn" onclick="deleteTask(this)">&times;</button>`;
    list.appendChild(item);
    input.value = "";
}
function deleteTask(button) {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?");
    if (confirmDelete) {
        let listItem = button.parentElement;
        listItem.remove();
    }
}