// The following 6 lines of code was adapted from https://www.youtube.com/watch?v=-pRg_daFjfk&list=WL&index=14 Accessed: 2023-03-31 and by courtesy of Garrit Schaap.
//the getElementById() method of the document interface returns an element object representing the element whose id property matches the specified string. since element ids are required to be unique if specified, they're a useful way to get access to a specific element quickly.
const InputText = document.getElementById('p'); 

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

// The following 25 lines of code was adapted from https://www.javatpoint.com/javascript-classlist and https://www.w3schools.com/html/html5_webstorage.asp Accessed: 2023-04-04 and by courtesy of Emma Åkerberg and Garrit Schaap.
//length = the length read-only property of the Storage interface returns the number of data items stored in a given storage object.
//classList and paragraph-styling = javaScript classList is a DOM property of javaScript that allows for styling the CSS classes of an element.
for (let i = 0; i < localStorage.length; i++) {
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = localStorage.key(i);
    toDoContainer.appendChild(paragraph);

    if (localStorage.getItem(localStorage.key(i)) === 'true') {
        paragraph.style.textDecoration = "line-through";
    }
    //when you click the to-do one time a line is drawn over it. "this" is used instead of "paragraph".
    // when you use this in a click eventListener it means that that is the element you click on.
    paragraph.addEventListener('click', function() {
        this.style.textDecoration = "line-through";
        localStorage.setItem(this.innerText, true);
    })
    //when you click twice on the to-do it disappears.
    paragraph.addEventListener('dblclick', function() {
        localStorage.removeItem(this.innerHTML);
        toDoContainer.removeChild(this);
    })

}

// The following 19 lines of code was adapted from https://www.youtube.com/watch?v=-pRg_daFjfk&list=WL&index=14 Accessed: 2023-03-31 and by courtesy of Emma Åkerberg and Garrit Schaap.
addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph); 
    //this is to make sure the inputfield is empty ones you have pressed +
    inputField.value = "";
    localStorage.setItem(paragraph.innerText, false);
    //when you click the to-do one time a line is drawn over it
    paragraph.addEventListener('click', function(){
        this.style.textDecoration = "line-through";
        localStorage.setItem(this.innerText, true);
    })
    //when you click twice on the to-do it disappears
    paragraph.addEventListener('dblclick', function(){
        localStorage.removeItem(this.innerHTML);
        toDoContainer.removeChild(this);
    })
})