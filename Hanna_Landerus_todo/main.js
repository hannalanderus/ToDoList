/***Globala, hämtat från html dokument***/
const newtodobutton = document.getElementById('newtodobutton');
const activeToDoList = document.getElementById('activeToDoList');
const todolistinput = document.getElementById('todolistinput');
const deleteAll = document.getElementById('deleteAll');

/***funktion för att lägga till uppgifter att göra i inputfält***/
newtodobutton.addEventListener('click', function () {
    const li = document.createElement('li');
    const doneButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    doneButton.id = "buttonDone";
    deleteButton.id = "buttonDelete";
    doneButton.innerHTML = '<span class="innertext">Done</span>';
    deleteButton.innerHTML = '<span class="innertext">Delete</span>';
    li.id = "list";
    li.textContent = todolistinput.value;
    li.appendChild(doneButton);
    li.appendChild(deleteButton);
    document.getElementById('activeToDoList').appendChild(li);



    /***funktion för att inte kunna lägga till tom upgift***/
    if (todolistinput.value && todolistinput) {
        //gör inget
    } else {
        //ta bort li så du ej kan lägga till tom li
        li.remove();
    };
    
    /***funktion för radera uppgift från todo lista***/
    deleteButton.addEventListener('click', function () {
        this.parentElement.parentElement.removeChild(this.parentElement);

    });

    /***funktion som deletar alla saker på todolistan***/
    deleteAll.addEventListener("click", deleteAllTodos);

    function deleteAllTodos() {
        li.remove();
    }

    /***funktion för att flytta uppgift till Done lista***/
    doneButton.addEventListener('click', function () {
        const doneList = document.getElementById('doneList');
        const listItems = document.querySelectorAll('li');

        activeToDoList.removeChild[0];
        doneList.appendChild(li);
        doneButton.remove(this.doneButton);
    });

    /***rensa inputfält från tidigare todo***/
    todolistinput.value = '';
    
}); /*newtodobutton funktion - end!*/
