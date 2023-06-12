const d = document;
const addLine = d.querySelector("#addLine");

const btnUpdateTitle = d.querySelector("#btnUpdateTitle");
const btnAdd = d.querySelector("#btnAdd");
const btnCancel = d.querySelector("#btnCancel");

const aFaire = d.querySelector("#aFaire");
const fait = d.querySelector("#fait");

let tasks;

// récupération de l'ancien localStorage
if (localStorage.getItem("task") !== null) {
    tasks = JSON.parse(localStorage.getItem("task"));
    displayTasks()
}else {
    tasks = [];
}


function putInLocalStorage() {
    localStorage.setItem("task", JSON.stringify(tasks));
    displayTasks()
}

btnAdd.addEventListener("click", e=>{
    let task = {
        Text: addLine.value,
        statement: "undo"
    }
    tasks.push(task);
    putInLocalStorage();
});

function displayTasks() {
    aFaire.innerHTML = "";
    fait.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let displayTask = `   
            <li class="currentLi${i}">
                <div class="texte" id="textTask${i}">
                    ${tasks[i].Text}
                </div>
                <div class="valide_delete">
                    <button id="btnEdit${i}">
                        <img src="assets/img/5996831.png" alt="valider">
                    </button>
                    <button id="btnDelete${i}">
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

        document.querySelector("#btnEdit" + i).addEventListener("click", e=> {

        })

        document.querySelector("#btnDelete" + i).addEventListener('click', e=> {
            tasks.splice(i, 1)
            putInLocalStorage()
        })

        document.querySelector("#textTask" + 1).addEventListener('click', e=> {
            console.log(tasks[i].Text)

            if ((tasks[i].statement) === "undo") {
                tasks[i].statement = "do";
            }
            else {
                tasks[i].statement = "undo";
            }
            putInLocalStorage();
        })

    }
}

