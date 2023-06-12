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

// récupération de l'ancien localStorage
if (localStorage.getItem("task") !== null) {
    tasks = JSON.parse(localStorage.getItem("task"));
}else {
    tasks = [];
}


function putInLocalStorage() {
    localStorage.setItem("task", JSON.stringify(tasks));
    displayTasks()
}

btnAdd.addEventListener("click", e=>{
    console.log(addLine.value)
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
    console.log(tasks)
    for (let i = 0; i < tasks.length; i++) {
        let displayTask = `   
            <li class="currentLi${i}">
                <div class="texte">
                    ${tasks[i].Text}
                </div>
                <div class="valide_delete">
                    <button class="btnEdit${i}">
                        <img src="assets/img/5996831.png" alt="valider">
                    </button>
                    <button class="btnDelete${i} ">
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
        let btnEdit = document.querySelector(".btnEdit" + i);
        let btnDel = document.querySelector(".btnDelete" + i);

        btnEdit.addEventListener("click", e=> {
            if ((tasks[i].statement) === "undo") {
                tasks[i].statement = "do";
            }
            else {
                tasks[i].statement = "undo";
            }
            putInLocalStorage();
        })

        btnDel.addEventListener('click', e=> {
            tasks.splice(i, 1)
            putInLocalStorage()
        })

    }
}

