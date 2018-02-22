/***To do list! Add task to a list. You can delete and mark them as done. If done they will move to a list over done tasks.***/
const newtodobutton = document.getElementById('newtodobutton');
const activeToDoList = document.getElementById('activeToDoList');
const todolistinput = document.getElementById('todolistinput');
const deleteAll = document.getElementById('deleteAll');

/***function for adding task to the to do list, creating list items and buttons***/
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



    /***function that makes it impossible to add a empty task***/
    if (todolistinput.value && todolistinput) {
        //do nothing
    } else {
        //remove the li element so no buttons and empty li creates
        li.remove();
    };

    /*** function for deleting task from to do list and done list***/
    deleteButton.addEventListener('click', function () {
        this.parentElement.parentElement.removeChild(this.parentElement);

    });

    /***function to remove ALL tasks on both lists***/
    deleteAll.addEventListener("click", deleteAllTodos);

    function deleteAllTodos() {
        li.remove();
    }

    /***function that moves the task from to do list to done list, when clicking done button***/
    doneButton.addEventListener('click', function () {
        const doneList = document.getElementById('doneList');
        const listItems = document.querySelectorAll('li');

        activeToDoList.removeChild[0];
        doneList.appendChild(li);
        doneButton.remove(this.doneButton);
    });

    /***remove text from input field after adding task to the list***/
    todolistinput.value = '';

}); /*newtodobutton function - end!*/
