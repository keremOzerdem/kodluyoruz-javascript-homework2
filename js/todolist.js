//deleting Default Tasks
let defaultTasksDOM = document.getElementsByTagName("li")

function closeDefaultTasks() {
    for (var i=0;i<defaultTasksDOM.length;i++){
        let span = document.createElement("span")
        let txt = document.createTextNode("\u00D7")//multiplication sign
        span.className="close"
        span.appendChild(txt)
        defaultTasksDOM[i].appendChild(span)
    }

    var closeClass = document.getElementsByClassName("close") 

    for(var i=0;i<closeClass.length;i++){
        closeClass[i].onclick = function() {
            var div = this.parentElement
            div.style.display="none"
        }
    }
}
closeDefaultTasks()

let ulDOM = document.querySelector("#list")
let taskDOM = document.getElementById("task")
let closeNewTaskDOM = document.getElementsByClassName("close")

function newElement() {
    let li = document.createElement("li")
    li.setAttribute("id",taskDOM.value)

    if (taskDOM.value !="" && taskDOM.value!=((taskDOM.value).keyCode==32) ) {
        li.appendChild(document.createTextNode(taskDOM.value))
        ulDOM.appendChild(li)

        var taskArray = []
        taskArray.push(taskDOM.value)
        for(let i=0;i<taskArray.length;i++){
            localStorage.setItem(taskArray[i], JSON.stringify("oldTask"))
        }
        $(".success").toast("show")
    }
    else if(taskDOM.value == "" || taskDOM.value == ((taskDOM.value).keyCode == 32)){
        $(".error").toast("show")
    }
    document.querySelector("#task").value = ""

    function closeTask(){
        let span = document.createElement("span")
        let txt = document.createTextNode("\u00D7")
        span.classList.add("close")
        span.appendChild(txt)
        li.appendChild(span)
        for(var i=0;closeNewTaskDOM.length;i++){
            closeNewTaskDOM[i].onclick = function() {
                var div = this.parentElement
                div.style.display="none"
            }
        }
    }
    closeTask()
}

function checkTask() {
    let taskListDOM = document.querySelector("#list")
    taskListDOM.addEventListener("click", (checkMark) => {
        if (checkMark.target.tagName === "LI") {
            checkMark.target.classList.toggle("checked")
        }
    })
}
checkTask()