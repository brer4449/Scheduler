//Need to make a for loop to add input block on each iteration
//Add button connected to each input block
//Have button functional, correspond to each input field
  //Have button save data to local storage


//Variable that shows today's date and time:
let today = new Date();
//Adding that variable to display in the DOM
$("#currentDay").text(`Today's current date and time: ${today}`);

let start = "2010-10-15";
let result = moment(start).fromNow();
console.log(result);

$(document).ready(function(){
  let jumbo = $("<div>");
  jumbo.attr("class", "jumbotron");
  $(".container").append(jumbo);

  for(let i=0; i<9; i++){
    let time = ["9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM"]
    let timeDiv = $("<div>");
    timeDiv.attr("class", "hour row time-block");
    timeDiv.text(time[i]);
    jumbo.append(timeDiv);
    let task = $("<input>");
    task.attr("class", "past present future");
    timeDiv.append(task);
  }

})