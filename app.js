// inv homework: variable scope on js
var important = false;
var ui_icon;
var save_button;
// var serverUrl = "https://fsdiapi.azurewebsites.net/";

function toggleImportant() {
  console.log("important value changed");
  if (!important) {
    important = true;
    ui_icon.removeClass("far").addClass("gold");
    $("#checkBox").removeClass("check-box");

  } else {
    important = false;
    ui_icon.removeClass("gold").addClass("far");
    $("#checkBox").addClass("check-box");
  }
}
function init() {
  console.log("my task manager");
  ui_icon = $("#iImportant");

  save_button = $("#btnSave");
  save_button.click(saveTask);
  //load data

  // hook events
  ui_icon.click(toggleImportant);
  // dont CALL function because then it will be executed too soon
}

function saveTask() {
  console.log("task saved");
  // read values from controls
  let title = $("#txtTitle").val();
  let important = $("#iImportant").val();
  let description = $("#txtDescription").val();
  let location = $("#location").val();
  let dueDate = $("#dueDate").val();
  let category = $("#selCategory").val();

  let task = new Task(
    title,
    important,
    description,
    location,
    dueDate,
    category,
  );
  // console.log(JSON.stringify(task));
  // $.ajax({
  //   url: serverUrl + "api/tasks/",
  //   type: "POST",
  //   data: JSON.stringify(task),
  //   contentType: "application/json",
  //   success: function (res) {
  //     console.log("server says:", res);
  //   },
  //   error: function (eDetails) {
  //     console.error("Error saving", eDetails);
  //   }
  // });
  // send obj to backend server 
  // display the task
  console.log(task);
  displayTask(task);
}

function displayTask(task) {
  let syntax = `<div class="task">
    <i class='important fas fa-star></i>
    <div class="description">
      <h5>${task.title}</h5>
      <p>${task.description}</p>
    <div>
    <label class="dueDate">${task.dueDate}</label>
    <label class="location">${task.location}</label>
     </div>`;
  task_list = $("#pendingList");
  console.log(task_list);
}

window.onload = init;

