const d = document;
const addLine = d.querySelector("#addLine");
const btnUpdateTitle = d.querySelector("#btnUpdateTitle");
const btnAdd = d.querySelector("#btnAdd");
const btnCancel = d.querySelector("#btnCancel");
const aFaire = d.querySelector("#aFaire");
const fait = d.querySelector("#fait");
let tasks;

var colorRouge = document.getElementById('rouge');
var colorVert = document.getElementById('vert');
var colorBleu = document.getElementById('bleu');
var colorWhite = document.getElementById('white');

colorRouge.addEventListener('click',function(){
    document.body.style.backgroundColor = 'red';
})
colorVert.addEventListener('click',function(){
    document.body.style.backgroundColor = 'green';
})
colorBleu.addEventListener('click',function(){
    document.body.style.backgroundColor = 'blue';
})
colorWhite.addEventListener('click',function(){
    document.body.style.backgroundColor = 'white';
})
if (localStorage.getItem("task") !== null) {
    tasks = JSON.parse(localStorage.getItem("task"));
    displayTasks();
} else {
    tasks = [];
}

function putInLocalStorage() {
    localStorage.setItem("task", JSON.stringify(tasks));
    displayTasks();
}

btnAdd.addEventListener("click", e => {
    let task = {
        Text: addLine.value,
        statement: "undo"
    };
    tasks.push(task);
    putInLocalStorage();
});

function displayTasks() {
    aFaire.innerHTML = "";
    fait.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let displayTask = `   
            <li class="currentLi${i}">
                <div id="textTask${i}" class="textTask">
                    ${tasks[i].Text}
                </div>
                <div class="valide_delete">
                    
                    <button class="btnDelete" data-index="${i}">
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
    const btnEditItems = document.querySelectorAll(".btnEdit");
    btnEditItems.forEach(btn => {
        btn.addEventListener("click", e => {
            const index = e.target.dataset.index;
            // Gérer l'édition de la tâche avec l'indice `index`
        });
    });

    const btnDeleteItems = document.querySelectorAll(".btnDelete");
    btnDeleteItems.forEach(btn => {
        btn.addEventListener("click", e => {
            const index = e.target.dataset.index;
            tasks.splice(index, 1);
            putInLocalStorage();
        });
    });

    const taskItems = document.querySelectorAll(".textTask");
    taskItems.forEach(item => {
        item.addEventListener("click", e => {
            const index = e.target.id.replace("textTask", "");
            console.log(tasks[index].statement);

            if (tasks[index].statement === "undo") {
                tasks[index].statement = "do";
            } else {
                tasks[index].statement = "undo";
            }
            putInLocalStorage()})

    })
} 