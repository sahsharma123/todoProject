const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    let taskText = inputBox.value.trim();
    
    if (taskText === '') {
        alert("Add a task");
    } else {
        let li = document.createElement("li");
        li.textContent = taskText;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Adds × symbol
        li.appendChild(span);

        listContainer.appendChild(li);
    }

    inputBox.value = ""; // Clear the input
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle checked class
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // remove the li
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();