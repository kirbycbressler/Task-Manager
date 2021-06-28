// inv homework: variable scope on js
var important = false;
var ui_icon;
var save_button;
var myTasks = [];
var serverUrl = "https://fsdiapi.azurewebsites.net/";

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

function fetchTasks(task) {
  $.ajax({
    url: serverUrl + "api/tasks",
    type: "GET",
    // data: JSON.stringify(task),
    // contentType: "application/json",
    success: function (res) {
      let data = JSON.parse(res);

      for (let i = 0; i < data.length; i++) {
        let task = data[i];
        if (task.name === "kirby") {
          myTasks.push(task);
          displayTask(task);
        }
      }
      // parse str into an object
    },
    error: function (eDetails) {
      console.error("Error saving", eDetails);
    },
  });
}

function init() {
  console.log("my task manager");
  ui_icon = $("#iImportant");

  // load data
  fetchTasks();


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
  // status1-pending status2-done status

  let task = new Task(
    title,
    important,
    description,
    location,
    dueDate,
    category,
    1,
  );
  console.log(JSON.stringify(task));
  $.ajax({
    url: serverUrl + "api/tasks/",
    type: "POST",
    data: JSON.stringify(task),
    contentType: "application/json",
    success: function (res) {
      console.log("server says:", res);
      // parse str into an object
      let task = JSON.parse(res);
      myTasks.push(task)
      displayTask(task);
    },
    error: function (eDetails) {
      console.error("Error saving", eDetails);
    }
  });
  // send obj to backend server 
  // display the task
  console.log(task);
}

function doneTask(id) {
  console.log("Marking done task", id);
  for (let i = 0; i < myTasks.length; i++) {
    let task = myTasks[i];
    if (task._id == id) {
      console.log(task.title);
      task.status = 2;
      $.ajax({
        url: serverUrl + "api/tasks",
        type: "PUT",
        data: JSON.stringify(task),
        contentType: "application/json",
        success: function (res) {
          console.log("response: ", res);
          // remove from pending, display on done list
          $(`#${id}`).remove();

          displayTask(task);
        },
        error: function (err) {
          console.error("error updating", err);
        }
      });
    }
  }
  }
  

  //  $.ajax({
  //    url: serverUrl + "api/tasks",
  //    type: "put",
  //    success: function (res) {
  //      console.log("server says:", res);
  //      // parse str into an object
  //      displayTask(JSON.parse(res));
  //    },
  //    error: function (eDetails) {
  //      console.error("Error saving", eDetails);
  //    },
  //  })
  
  function displayTask(task) {
    let syntax = `<div id="${task._id}" class="task">
    <i class='important fas fa-star'></i>
    <div class="description">
    <h5>${task.title}</h5>
    <p>${task.description}</p>
    <div>
    <label class="dueDate">${task.dueDate}</label>
    <label class="location">${task.location}</label>
    </div>`;
    
    if (task.status == 1) {
      syntax += (`
      <button
      onclick="doneTask('${task._id}')"
      class="btn btn-sm btn-primary"
      >
      
      Done
      </button>`);
      $("#pendingList").append(syntax);
    } else if (task.status == 2) {
      syntax += (`
      <button
      onclick="doneTask('${task._id}')"
      class="btn btn-sm btn-primary"
      >
      remove
      </button>`);
      $("#doneList").append(syntax);
    }
  };
  
  window.onload = init;

  
  
  // add STYLE
  // icon for done
  // add delete icon from already completed tasks, not "done"
  // status 3
  // update
  // create to remove the task add status= 3