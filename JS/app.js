let today = moment();
$("#currentDay").text(`Today's current date and time: ${today}`);
let currentHour = moment().format("H");
//Need to parse that if we want to be able to work with numbers
currentHour = parseInt(currentHour);
$(document).ready(function () {
  let row = $("<div>");
  row.addClass("row");
  $(".container").append(row);
  let time = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  //For loop to dynamically create columns of numbers, input fields, and save buttons
  function renderPage() {
    for (let i = 0; i < 9; i++) {
      let timeDiv = $("<div>");
      timeDiv.addClass("hour col-3 time-block").text(`${time[i]}:00`);
      row.append(timeDiv);

      let inputTag = $("<input>");
      //setting attribute of data to be the current interation of i (numbers 0-8)
      inputTag.attr("data", `${i}`).addClass("col-8");
      let tasks = localStorage.getItem(`tasks${i}`);
      inputTag.val(tasks)
      row.append(inputTag);

      //if statement to dynamically change the color of the input field by adding class names
      if (time[i] < currentHour) {
        inputTag.addClass("past");
      } else if (time[i] === currentHour) {
        inputTag.addClass("present");
      } else {
        inputTag.addClass("future");
      }

      let saveBtn = $("<button>");
      //setting attribute of data to be the current interation of i (numbers 0-8)
      saveBtn.text("Save").attr("data", `${i}`).addClass("saveBtn col-1");
      row.append(saveBtn);

      //Event listener for save button clicks. Setting and getting local storage
      saveBtn.on("click", function () {
        //if save button data index matches inputTag data index
        if (saveBtn.attr(`data${i}`) == inputTag.attr(`data${i}`)) {
          let userInput = inputTag.val();
          localStorage.setItem(`tasks${i}`, userInput);
        }
      });
    };
  };
  renderPage();
});