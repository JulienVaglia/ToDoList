
let d = document;
let addLine = d.querySelector("#addLine");
let addBtn = d.querySelector("#addBtn");


let oldStorage = JSON.parse(localStorage.getItem("task"));
let newStorage = [];
if (oldStorage) {
    for (let i = 0; i < oldStorage.length; i++) {
        newStorage.push(oldStorage[i]);
    }
}


addBtn.addEventListener("click", function (event) {
    let task = {
        Text: addLine.value, statement: "undo"
    }
    newStorage.push(task);
    localStorage.setItem("task", JSON.stringify(newStorage));
});


for (let i = 0; i < oldStorage.length; i++) {
    console.log(oldStorage[i])
    
    if (oldStorage[i].statement === "undo"){
        d.querySelector('#aFaire').innerHTML +=`
        <li>
            <div class="texte">
                ${oldStorage[i].Text}
            </div>
            <div class="valide_delete">
                <a href="">
                    <button>
                        <img src="assets/img/5996831.png" alt="valider">
                    </button>
                </a>
                <a href="">
                    <button>
                        <img src="assets/img/9153963.png" alt="annuler">
                    </button>
                </a>
            </div>
        </li>
  
        `
    }else{
        d.querySelector('#fait').innerHTML +=`
        <li>${oldStorage[i].Text}</li>
        `

    }


}
