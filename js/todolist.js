//deleting default tasks

var defaultTasks = document.getElementsByTagName("li")

function closeDefaultTasks() {
  for (var i = 0; i < defaultTasks.length; i++) {
    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    defaultTasks[i].appendChild(span)
  }

  var close = document.getElementsByClassName("close")
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement
      div.style.display = "none"
    }
  }
}
closeDefaultTasks()

//adding new tasks

var ul = document.querySelector("#list")
var task = document.getElementById("task")
var closeNewTask = document.getElementsByClassName('close')

function newElement() {
  var li = document.createElement("li")
  li.setAttribute('id', task.value)

  if (task.value != "" && task.value != ((task.value).keyCode == 32)) {
    li.appendChild(document.createTextNode(task.value))
    ul.appendChild(li)

    var taskArray = []
    taskArray.push(task.value)
    for (let i = 0; i < taskArray.length; i++) {
      localStorage.setItem(taskArray[i], JSON.stringify("oldTask"))
    }
    $('.success').toast("show")
  }
  else if (task.value == "" || task.value == ((task.value).keyCode == 32)) {
    $('.error').toast("show")
  }
  document.getElementById("task").value = ""


  //delete new task

  function closeTask() {
    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    span.classList.add("close")
    span.appendChild(txt)
    li.appendChild(span)

    for (var i = 0; i < closeNewTask.length; i++) {
      closeNewTask[i].onclick = function () {
        var div = this.parentElement
        div.style.display = "none"
      }
    }
  }
  closeTask()

}

//check tasks
function checkTask() {
  var taskList = document.querySelector("#list")
  console.log(taskList)

  taskList.addEventListener("click", (checkMark) => {
    if (checkMark.target.tagName === "LI") {
      checkMark.target.classList.toggle("checked")
    }
  })
}
checkTask()

