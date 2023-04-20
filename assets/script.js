//Variables for application
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var readTask = $(readTask);
var hour = dayjs().hour();
var task = $(".textBlock");

//NOT DONE: Add jQuery according to instructions

//ALL GOOD: Date and time with seconds counting down
function displayTime() {
  var rightNow = dayjs().format("MMMM DD, YYYY [at] hh:mm:ss a");
  currentDay.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);

//ALL GOOD: Add EventListener to the save button to store to local
saveBtn.on("click", function () {
  var button = $(this);
  var siblings = button.siblings();
  var textArea = $(siblings[1]);
  var task = textArea.val();

  saveTask(task);
});

//NOT GOOD: Pull stored data from local storage & render it on the application
function saveTask(task) {
  localStorage.setItem("task", JSON.stringify(task));
}

function readTask() {
  var task = localStorage.getItem("task");
  if (task) {
    task = JSON.parse(task);
  } else {
    task = [];
  }
  return task.textValue;
}

function printTask() {
  task.empty();
  var task = readTask();
}

//ALL GOOD: Data attributes to allow time slots to change color based on past, present, future
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

//NOT DONE: Prevent the page from reloading
// function assignTask(event) {
//   event.preventDefault();
// }

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

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
