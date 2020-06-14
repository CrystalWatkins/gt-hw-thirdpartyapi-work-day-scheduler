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
var scheduleCol = $("<input>").addClass("col-sm-8 past present future");
var saveCol = $("<button>").addClass("col-sm-2 saveBtn");

timeRow.append(timeCol);
container.append(timeRow);
$(".hour").text("");
timeCol.after(scheduleCol);
$(".past").text("");
scheduleCol.after(saveCol);
$(".saveBtn").html('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/></svg>');
    saveCol.addClass(".saveBtn i:hover");

    var timeList = [
     "9 AM",
     "10 AM",
     "11 AM",
     "12 PM",
     "1 PM",
     "2 PM",
     "3 PM",
     "4 PM",
     "5 PM",
 ];
 
for (var i = 0; i < timeList.length; i ++) {
    timeCol.textContent = timeList[i]; 
    timeCol.append(timeList[i]);
    }


    

    // var newRow = $('.row');
    // for (var i = 0; i < 8; i++) {
    //   newRow.clone().insertAfter(newRow);
    // //   timeCol.attr("id", "timeDisplay" + [i]);
    // };



});

//   .description
//   .time-block - all of it
//   .row - rows
//   .hour - left column
//   .past  -  
//   .present - 
//   .future  - 
//   .saveBtn  - 