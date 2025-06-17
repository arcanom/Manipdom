let listTasks = [];
let newTask = document.getElementById("newTask");
let addTask = document.getElementById("addTask");
let listTask = document.getElementById("listTask");


function refreshList() {
    listTask.innerHTML = "";

    listTasks.forEach((task) => {
        let li = document.createElement("li");
        li.textContent = task;
        listTask.appendChild(li);
    });
}

addTask.addEventListener("click", () => {
    let task = newTask.value.trim();
    if (task === "") return;

    listTasks.push(task);
    renderTasks(); 
    newTask.value = ""; 
});

function renderTasks() {
    listTask.innerHTML = ""; 
    listTasks.forEach((element, index) => {
        const taskElement = document.createElement("div");
        taskElement.innerHTML = `
            <p>${element}</p>
            <button type="button" class="delete-btn" data-index="${index}">Supprimer</button>
            <button type="button" class="edit-btn" data-index="${index}">Modifier</button>
        `;
        listTask.appendChild(taskElement);
    });


    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            listTasks.splice(index, 1);
            renderTasks();
        });
    });

    document.querySelectorAll(".edit-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            const newText = prompt("Modifier la tâche :", listTasks[index]);
            if (newText !== null) {
                listTasks[index] = newText.trim();
                renderTasks();
            }
        });
    });
}