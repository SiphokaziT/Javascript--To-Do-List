let inputfield = document.getElementById('inputfield');
let listcontainer = document.getElementById('list-container')

function myfunction() {
    if (inputfield.value === "") {
        alert("enter text")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputfield.value
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputfield.value = "";
    SaveData();

}
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.listcontainer.toggle("checked");
        SaveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        SaveData();
    }
}, false);

function SaveData() {
    localStorage.setItem("data", listcontainer.innerHTML);

}
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();