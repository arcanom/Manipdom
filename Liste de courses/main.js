let listTasks = [];
let newTask = document.getElementById("newTask");
let addTask = document.getElementById("addTask");
let listTask = document.getElementById("listTask");


function refreshList() {
    listTask.innerHTML = "";

    listTasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;
        listTask.appendChild(li);
    });
}

addTask.addEventListener("click", ()=>{
    let task = newTask.value.trim() ;
     if (task === "") return;
    listTasks.push(task);
    listTasks.forEach(element =>{
        listTask.innerHTML += `
        <p> ${element} </p>
        `
    })

      refreshList();


     newTask.value = "";
})