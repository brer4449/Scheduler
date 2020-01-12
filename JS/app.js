//Need to make a for loop to add input block on each iteration✓
//Add button connected to each input block
//Have button functional, correspond to each input field
//Have button save data to local storage

//Have button save data to local storage

let today = moment();
$("#currentDay").text(`Today's current date and time: ${today}`);

$(document).ready(function () {
  let row = $("<div>");
  row.addClass("row");
  $(".container").append(row);
  let currentHour = moment().format("h");
  //Need to parse that if we want to be able to work with numbers
  currentHour = parseInt(currentHour);
  //For loop to dynamically create columns of numbers, input fields, and save buttons
  for (let i = 0; i < 9; i++) {
    let time = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let timeDiv = $("<div>");
    timeDiv.addClass("hour col-3 time-block");
    timeDiv.text(time[i]);
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
    saveBtn.addClass("saveBtn col-1");
    row.append(saveBtn);
    saveBtn.on("click", function () {

      let tasks;
      saveBtn.on("click", function () {
        //Need these lines but they're wrong, some iteration of them...
        // let userInput = inputTag.val();
        // tasks = userInput;
        localStorage.setItem("tasks", JSON.stringify(tasks));
      });
    });
  };
});