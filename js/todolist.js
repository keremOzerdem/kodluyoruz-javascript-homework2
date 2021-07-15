//#region //deleting default tasks 

var defaultTasks = document.getElementsByTagName("li")

// The function that deals with closing each existing list element
function closeDefaultTasks() {
    //creating multiplication signs for each li element
    for (var i = 0; i < defaultTasks.length; i++) {
        let span = document.createElement("span")//creating span
        let txt = document.createTextNode("\u00D7")//creating multiplication sign
        span.className = "close" //adding "close" class for bootstrap to each span
        span.appendChild(txt)//adding multiplication sign to each span element
        defaultTasks[i].appendChild(span) // adding span element to each li element
    }

    var close = document.getElementsByClassName("close")// assigning structures with the close class as a array
    // Executing all li elements with class close
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () { // Execute the function, when clicked on span elements
            var div = this.parentElement // this.parentElement -> li element
            // this -> span element
            div.style.display = "none" // selected li is removed
        }
    }
}
closeDefaultTasks()
//#endregion    

//#region //adding new tasks

var ul = document.querySelector("#list") // accessing ul DOM structure and assigning DOM to a variable
var task = document.getElementById("task")// accessing input's value and assinging value to a variable
var closeNewTask = document.getElementsByClassName('close')// assigning structures with the close class as a array

//The function creates new li elements
function newElement() {
    var li = document.createElement("li")// creating new li DOM element
    li.setAttribute('id', task.value)//assigning input's value to li element's id attribute

    //if input's value is not empty or didn't press spacebar 
    if (task.value != "" && task.value != ((task.value).keyCode == 32)) {
        li.appendChild(document.createTextNode(task.value))//created a new li element contains text as input's value
        ul.appendChild(li)//added li element to ul element

        var taskArray = [] //Created a empty task array
        taskArray.push(task.value)//Value of input added to end of array
        //This loop loops through the entire empty task list
        for (let i = 0; i < taskArray.length; i++) {
            localStorage.setItem(taskArray[i], JSON.stringify("oldTask"))//sends array to local storage
        }
        $('.success').toast("show")//calling success class on bootstrap with toast structure
    }
    //else if input's value is empty or pressed spacebar
    else if (task.value == "" || task.value == ((task.value).keyCode == 32)) {

        $('.error').toast("show")// calling error class on bootstrap with toast structure
    }
    document.getElementById("task").value = ""//resetted the input value


    //delete new task

    function closeTask() {
        let span = document.createElement("span")//creating span
        let txt = document.createTextNode("\u00D7")//creating multiplication sign
        span.classList.add("close")//adding "close" class for bootstrap to span
        span.appendChild(txt)//adding multiplication sign to span element
        li.appendChild(span)// adding span element to li element
        //Executing new li element with class close
        for (var i = 0; i < closeNewTask.length; i++) {
            // Execute the function, when clicked on span elements
            closeNewTask[i].onclick = function () {
                var div = this.parentElement//this.parentElement -> li element
                div.style.display = "none" //selected li is removed
            }
        }
    }
    closeTask()
}
//#endregion

//check tasks
//Allows the li element to be selected on click
function checkTask() {
    var taskList = document.querySelector("#list")//Choosed task's DOM is assigned a structure
    //It listens to the click event of the request, 
    //in the if part it checks whether the event target
    // is li, it says if he clicked on the li element,
    // and if he clicked on the li element, 
    //it gives or deletes the class (1st click adds class,
    // 2nd click deletes class, 3rd click) also adds class,
    // 4th click deletes class....)
    taskList.addEventListener("click", (checkMark) => {
        if (checkMark.target.tagName === "LI") {
            checkMark.target.classList.toggle("checked")
        }
    })
}
checkTask()

