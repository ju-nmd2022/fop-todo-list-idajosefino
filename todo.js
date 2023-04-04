localStorage.length;
const InputText = document.getElementById('p'); 

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

//event listener where you listen to the load event.
function onLoadHandler() {
    const headlineElement = document.querySelector("h1");
    const footerElement = document.getElementById("footer");
}
window.addEventListener("load", onLoadHandler);

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
//this is to make sure the inputfield is empty ones you have pressed +
    inputField.value = "";
    localStorage.setItem(paragraph.innerText, false);
//when you click the to-do one time a line is drawn over it
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
        localStorage.setItem(paragraph.innerText, true);
    })
//when you click twice on the to-do it disappears
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
        localStorage.removeItem(paragraph.innerText, true);
    })
})

//need help with understanding how to add the paragraphs you write as to-dos is saved in localstorage and removed by double click...
//need helo about onLoadHandler cause I am not sure it is working.

