//Variables for application
var saveBtn = $(".saveBtn");
var currentDay = $("#currentDay");
var currentHourInt = $(currentDay);

$(document).ready (function () {
  renderPlans();
})
//Date and time with seconds counting down
function displayTime() {
  var rightNow = dayjs().format("MMMM DD, YYYY [at] hh:mm:ss a");
  currentDay.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);

//Data attributes to allow time slots to change color based on past, present, furture
$("#hour-9").attr("data-time", dayjs("9:00 am", "h:mm a").format("HH MM"));
$("#hour-10").attr("data-time", dayjs("10:00 am", "hh:mm a").format("HH"));
$("#hour-11").attr("data-time", dayjs("11:00 am", "hh:mm a").format("HH"));
$("#hour-12").attr("data-time", dayjs("12:00 pm", "hh:mm a").format("HH"));
$("#hour-1").attr("data-time", dayjs("1:00 pm", "h:mm a").format("HH"));
$("hour-2").attr("data-time", dayjs("2:00 pm", "h:mm a").format("HH"));
$("#hour-3").attr("data-time", dayjs("3:00 pm", "h:mm a").format("HH"));
$("#hour-4").attr("data-time", dayjs("4:00 pm", "h:mm a").format("HH"));
$("#hour-5").attr("data-time", dayjs("5:00 pm", "h:mm a").format("HH"));



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // saveBtn.on("click", function () {
  //   var rowHour = $(this).attr()
  // })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  for (var i = 0; i <= 12; i++) {
    var inputHourInt = $("#" + i + "row").attr("data-time");

    if (currentHourInt === inputHourInt) {
      $("#" + i + "row").addClass("present");
    if (currentHourInt > inputHourInt) {
      $("#" + i + "row").addClass("past");
    }
    if (currentHourInt < inputHourInt) {
      $("#" + i + "row").addClass("future");
    }
  }}
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?