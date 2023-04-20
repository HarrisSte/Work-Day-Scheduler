//Variables for application
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var readTask = $(readTask);
var hour = dayjs().hour();
var task = $(".textBlock");

//Current date and time with seconds counting down at top of application
function displayTime() {
  var rightNow = dayjs().format("MMMM DD, YYYY [at] hh:mm:ss a");
  currentDay.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);

//EventListener to the save button to store to local
//Saves information to specific timeslot chosen by user
saveBtn.on("click", function () {
  var button = $(this);
  var siblings = button.siblings();
  var textArea = $(siblings[1]);
  var task = textArea.val().trim();
  var timeSlot = textArea.attr("id");

  saveTask(task, timeSlot);
});

var storageObj = JSON.parse(localStorage.getItem("tasks")) || {};

//Pull stored data from local storage & render it on the application after refresh
//Will save user input to specific timeslot where the user types
function saveTask(task, timeSlot) {
  storageObj[timeSlot] = task;
  localStorage.setItem("tasks", JSON.stringify(storageObj));
}

function loadTasks() {
  for (var i = 9; i <= 17; i++) {
    var textArea = $("#hour-" + i);
    var thisTask = storageObj["hour-" + i];
    if (thisTask) {
      textArea.val(thisTask);
    }
  }
}

//Data attributes to allow time slots to change color based on the current hour
//Present: red, past: grey, and future: green
for (var i = 9; i <= 17; i++) {
  var textArea = $("#hour-" + i);

  if (hour === i) {
    textArea.addClass("present");
  }
  if (hour > i) {
    textArea.addClass("past");
  }
  if (hour < i) {
    textArea.addClass("future");
  }
}

loadTasks();
