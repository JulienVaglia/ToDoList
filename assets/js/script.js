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

    if (oldStorage[i].statement === "undo") {
        d.querySelector('#aFaire').innerHTML += `
        <li class="currentLi${i}">
            <div class="texte">
                ${oldStorage[i].Text}
            </div>
            <div class="valide_delete">
                <a href="">
                    <button class="editBtn${i}">
                        <img src="assets/img/5996831.png" alt="valider">
                    </button>
                </a>
                <a href="">
                    <button class="delBtn${i}">
                        <img src="assets/img/9153963.png" alt="annuler">
                    </button>
                </a>
            </div>
        </li>
  
        `
    } else {
        d.querySelector('#fait').innerHTML += `
        <li class="currentLi${i}">
            <div class="texte">
                ${oldStorage[i].Text}
            </div>
            <div class="valide_delete">
                <a href="">
                    <button class="editBtn${i}">
                        <img src="assets/img/5996831.png" alt="valider">
                    </button>
                </a>
                <a href="">
                    <button class="delBtn${i}">
                        <img src="assets/img/9153963.png" alt="annuler">
                    </button>
                </a>
            </div>
        </li>
        `
    }


    // Click on a close button to hide the current list item
    let close = document.querySelector(".delBtn" + i);

    close.addEventListener('click', function () {
        newStorage.splice(i, 1)
        localStorage.setItem("task", JSON.stringify(newStorage));
    })
}





