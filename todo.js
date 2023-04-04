const InputText = document.getElementById('p'); 

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

let arrayOfTasks;

//how to read what is in localStorage
for (let i = 0; i < localStorage.length; i++) {
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = localStorage.key(i);
    toDoContainer.appendChild(paragraph);

    if (localStorage.getItem(localStorage.key(i)) === 'true') {
        paragraph.style.textDecoration = "line-through";
    }

    //when you click the to-do one time a line is drawn over it
    paragraph.addEventListener('click', function() {
        this.style.textDecoration = "line-through";
        localStorage.setItem(this.innerText, true);
    })
    //when you click twice on the to-do it disappears
    paragraph.addEventListener('dblclick', function() {
        localStorage.removeItem(this.innerHTML);
        toDoContainer.removeChild(this);
    })
}

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
//this is to make sure the inputfield is empty ones you have pressed +
    inputField.value = "";
    localStorage.setItem(paragraph.innerText, false);
//when you click the to-do one time a line is drawn over it
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
        localStorage.setItem(paragraph.innerText, true);
    })
//when you click twice on the to-do it disappears
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
        localStorage.removeItem(paragraph.innerText, true);
    })
})

//need helo about onLoadHandler cause I am not sure it is working.

