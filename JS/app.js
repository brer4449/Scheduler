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
$(document).ready(function(){
  //Variable row is a new, empty div
  let row = $("<div>");
  row.attr("class", "row");
  $(".container").append(row);
  //Variable currenthour is the string form of what hour it is right now
  let currentHour = moment().format("h");
  //Need to parse that if we want to be able to work with numbers
  currentHour = parseInt(currentHour);
  //For loop to dynamically create columns of numbers, input fields, and save buttons
  for(let i=0; i<9; i++){
    //Array of hours we need to work with
    let time = [9, 10, 11, 12, 1, 2, 3, 4, 5]
    //timeDiv is new, empty div where all text content will be appended to
    let timeDiv = $("<div>");
    timeDiv.addClass("hour col-3 time-block");
      if(8<time[i] && time[i]<12){
        timeDiv.text(`${time[i]}:00AM`);
      } else{
        timeDiv.text(`${time[i]}:00PM`);
      }
    // timeDiv.text(time[i]);
    row.append(timeDiv);
    let input = $("<input>");
    input.addClass("col-8");
    if(currentHour<6){
      input.addClass("future");
    } else {
      input.addClass("past");
    }
    row.append(input);
    let saveBtn = $("<button>");
    saveBtn.text("Save");
    saveBtn.attr("class", "saveBtn col-1");
    row.append(saveBtn);
    saveBtn.on("click", function(){
  
    });
    
  }
})