//Need to make a for loop to add input block on each iteration✓
//Add button connected to each input block
//Have button functional, correspond to each input field
//Have button save data to local storage

//Variable that shows today's date and time:
let today = moment();
//Adding that variable to display in the DOM
$("#currentDay").text(`Today's current date and time: ${today}`);

// let start = "2010-10-15";
// let result = moment(start).fromNow();
// console.log(result);
$(document).ready(function() {
  //Variable row is a new, empty div
  let row = $("<div>");
  row.attr("class", "row");
  $(".container").append(row);
  //Variable currenthour is the string form of what hour it is right now
  let currentHour = moment().format("h");
  //Need to parse that if we want to be able to work with numbers
  currentHour = parseInt(currentHour);
  //For loop to dynamically create columns of numbers, input fields, and save buttons
  for (let i = 0; i < 9; i++) {
    //Array of hours we need to work with
    let time = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    //timeDiv is new, empty div where all text content will be appended to
    let timeDiv = $("<div>");
    timeDiv.addClass("hour col-3 time-block");
    //if statement to dynamically add AM or PM based on numbers
    timeDiv.text(`${time[i]}:00`);
    row.append(timeDiv);
    let inputTag = $("<input>");
    inputTag.addClass("col-8");
    //if statement to dynamically change the color of the input field by adding class names
    currentHour = 11;
    if (time[i] < currentHour) {
      inputTag.addClass("past");
    } else if (time[i] === currentHour) {
      inputTag.addClass("present");
    } else {
      inputTag.addClass("future");
    }
    row.append(inputTag);
    //Creates save button and appends it to row
    let saveBtn = $("<button>");
    saveBtn.text("Save");
    saveBtn.attr("class", "saveBtn col-1");
    row.append(saveBtn);
    let tasks;
    saveBtn.on("click", function() {
      //Need these lines but they're wrong, some iteration of them...
      // let userInput = inputTag.val();
      // tasks = userInput;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
  }
});
