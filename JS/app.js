//Need to make a for loop to add input block on each iteration✓
//Add button connected to each input block
//Have button functional, correspond to each input field
  //Have button save data to local storage


//Variable that shows today's date and time:
let today = new Date();
//Adding that variable to display in the DOM
$("#currentDay").text(`Today's current date and time: ${today}`);

// let start = "2010-10-15";
// let result = moment(start).fromNow();
// console.log(result);
let now = new Date().getTime();
m = moment(now).toDate();
console.log(m);
$(document).ready(function(){
  let row = $("<div>");
  row.attr("class", "row");
  $(".container").append(row);
  let start = new Date().getHours(8);
  // if(today<start){
  //   console.log("it's earlier than 9AM!")
  // } else {
  //   console.log("it's later than 9AM!")
  // }
  // console.log(Array.from(today));
  // console.log(typeof start);
  for(let i=0; i<9; i++){
    let time = ["9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM"]
    let timeDiv = $("<div>");
    timeDiv.attr("class", "hour col-3 time-block");
    timeDiv.text(time[i]);
    row.append(timeDiv);
    let input = $("<input>");
    input.attr("class", "past future present col-6");
    row.append(input);
    let saveBtn = $("<button>");
    saveBtn.attr("class", "saveBtn col-3");
    row.append(saveBtn);
    saveBtn.on("click", function(){
  
    });
    
  }
})