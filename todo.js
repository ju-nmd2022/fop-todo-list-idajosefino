// function onLoadHandler() {
//     loadData();
//     const headlineElement = document.querySelector("h1");
//     console.log(headlineElement);

//     const footerElement = document.getElementById("footer");
// }

// window.addEventListener("load", onLoadHandler);

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})

// function finishedLoadingHandler(event) {
//     console.log(event.target);
//     const request = event.target;
//     const response = request.response;
//     const tasks = response.tasks
    
//     for (let task of tasks) {
//         console.log(task.name);
//     }
// }

// function loadData() {
//     const request = new XMLHttpRequest();
//     request.responseType = "json";

//     const url = "data.json";
//     const method = "GET";
//     request.open(method, url);
//     request.addEventListener("load", finishedLoadingHandler);
//     request.send();
// }

// const myArray = [42, 12, 5, 7];
// const jsonString = JSON.stringify(myArray);
// localStorage.array = jsonString;
