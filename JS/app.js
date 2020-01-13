//Need to make a for loop to add input block on each iteration✓
//Add button connected to each input block
//Have button functional, correspond to each input field
//Have button save data to local storage
/*
- You have way too much going on all inside the document ready function, with no separate functions for specific tasks
  - The biggest issue I see is that you're trying to derive what the tasks are by looking at what's in the DOM.
    The DOM should *reflect* data, not the other way around.
  -Create a global variable that manages your data (state). Your DOM then *represents* (displays) that data via a render function.
  -LocalStorage then *stores/retrieves* that data via its own function(s).
  -Your global data variable is the single source of truth for the state of the app. Everything should render or read/write to and from that.
*/

let today = moment();
$("#currentDay").text(`Today's current date and time: ${today}`);
let currentHour = moment().format("H");
//Need to parse that if we want to be able to work with numbers
currentHour = parseInt(currentHour);
// let time = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let task;
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
      inputTag.attr("data", `${i}`).addClass("col-8");
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
      saveBtn.text("Save").attr("data", `${i}`).addClass("saveBtn col-1");
      row.append(saveBtn);
      saveBtn.on("click", function () {
        if (saveBtn.attr(`data${i}`) == inputTag.attr(`data${i}`)) {
          // console.log("hello");
          let userInput = inputTag.val()
          let tasks = JSON.parse(localStorage.getItem(`tasks${i}`, $(this).attr("data")));
          if (!tasks) {
            tasks = [];
          }
          tasks.push(userInput);
          console.log(userInput);
          console.log(i)
          localStorage.setItem(`tasks${i}`, JSON.stringify(tasks))
        }
      });
    };
  };
  renderPage();
});

/*
// saveBtn.on("click", function () {
      //   console.log(saveBtn);
      //   //Something like this(was watching Gary)
      //   let data = $(this).attr(`data ${i}`)
      //   let task = inputTag.val()
      //   // task = data;
      //   console.log(data);
      //   // let dataItem = inputTag.text();
      // });

      // saveBtn.on("click", function () {
      //Need these lines but they're wrong, some iteration of them...
      // let userInput = inputTag.val();
      // tasks = userInput;
      // localStorage.setItem("tasks", JSON.stringify(tasks));
      // });

// if ($(`saveBtn.${i}`).val() == $(`inputTag.${i}`).val()) {
    //   saveBtn.on("click", function () {

if ($(`saveBtn.${i}`).val() == $(`inputTag.${i}`).val()) {
        let taskItem = $(`inputTag.${i}`).val()
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        if (!tasks) {
          tasks = [];
        }
        tasks.push(taskItem);
        console.log(taskItem);
        localStorage.setItem("tasks", JSON.stringify(tasks))
      };
*/