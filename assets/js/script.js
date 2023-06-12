let d = document;
let addLine = d.querySelector("#addLine");

let btnAdd = d.querySelector("#btnAdd");
let btnCancel = d.querySelector("#btnCancel");
let btnUpdateTitle = d.querySelector("#btnUpdateTitle");

let aFaire = d.querySelector("#aFaire");
let fait = d.querySelector("#fait");

// récupération de l'ancien localStorage
let tasks = [];
tasks.push(JSON.parse(localStorage.getItem("task")));
console.log(tasks)


showTasks()


btnAdd.addEventListener("click", function (event) {
    let task = {
        Text: addLine.value, statement: "undo"
    }
    tasks.push(task);
    localStorage.setItem("task", JSON.stringify(tasks));
});


function showTasks() {
    for (let i = 0; i < tasks.length; i++) {
        let displayTask = `   
        <li class="currentLi${i}">
            <div class="texte">
                ${tasks[i].Text}
            </div>
            <div class="valide_delete">
                <button class="editBtn${i}">
                    <img src="assets/img/5996831.png" alt="valider">
                </button>
                <button class="delBtn${i}">
                    <img src="assets/img/9153963.png" alt="annuler">
                </button>
            </div>
        </li>
    `;
        if (tasks[i].statement === "undo") {
            aFaire.innerHTML += displayTask;
        } else {
            fait.innerHTML += displayTask;
        }
    }
}









