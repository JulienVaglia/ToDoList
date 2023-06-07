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

addBtn.addEventListener("click",  e=>{

    let task = {
        Text: addLine.value,
        statement: "undo"
    }
    newStorage.push(task);
    localStorage.setItem("task", JSON.stringify(newStorage));
});

for (let i = 0; i < newStorage.length ; i++) {
    console.log(newStorage[i])
}