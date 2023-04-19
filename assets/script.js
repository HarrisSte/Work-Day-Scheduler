//Variables for application
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var tasks = $(tasks);
var hour = dayjs().hour();

//Date and time with seconds counting down
function displayTime() {
  var rightNow = dayjs().format("MMMM DD, YYYY [at] hh:mm:ss a");
  currentDay.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);

//Pull stored data from local storage & render it on the application
function saveTasksToLocal(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function printTaskData() {
  taskDisplay.empty();
}

function readTasksFromLocal() {
  var tasks = localStorage.getItem("tasks");
  if (tasks) {
    tasks = JSON.parse(tasks);
  } else {
    tasks = [];
  }
  return tasks;
}
//Data attributes to allow time slots to change color based on past, present, future
for (var i = 9; i <= 17; i++) {
  var textArea = $("#hour-" + i);

  if (hour === i) {
    textArea.addClass("present");
  }
  if (hour < i) {
    textArea.addClass("past");
  }
  if (hour > i) {
    textArea.addClass("future");
  }
}

//Prevent the page from reloading
function assignTask(event) {
  event.preventDefault();
}

//INSTRUCTIONS THAT WERE IN THE STARTERCODE:

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
