// 9 columns with 3 rows - 2 small rows on either side with one big row in the middle
//be able to input tasks during each out block
// display a current date at the top with other calendar script
// save the tasks to the calendar using the save button on the right
// jquery time and have it display on screen- 
//using grey blocks, red blocks, green blocks- will use LIBRARY for this
//grid documentation

 // Array holds all of the drinks available

    //append div to the id currentDay
$(document).ready(function() {
    console.log("function working")
$("#currentDay").text(moment().format("MMMM Do YYYY"));


//create div
// create row with class .time-block
//create 3 columns with .hour // .description // .saveBtn
var container = $(".time-block");
var timeRow = $("<div>").addClass("row");
var timeCol = $("<div>").addClass("col-sm-2 hour");
timeRow.append(timeCol);
container.append(timeRow);
$(".hour").text("9am");
var scheduleCol = $("<div>").addClass("col-sm-8 past present future");
timeCol.after(scheduleCol);
$(".past").text("this is where the main text appears");
var saveCol = $("<div>").addClass(" col-sm-2 saveBtn");
scheduleCol.after(saveCol);
$(".saveBtn").text("this is where the save button goes");
   



// use this function event as event listener
// $("#click-me").on("click", function() {
//   alert("I've been clicked!");

});

//   .description
//   .time-block - all of it
//   .row - rows
//   .hour - left column
//   .past  -  
//   .present - 
//   .future  - 
//   .saveBtn  - 