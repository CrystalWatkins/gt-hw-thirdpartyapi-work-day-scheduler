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
var scheduleCol = $("<div>").addClass("col-sm-8 past present future");
var saveCol = $("<div>").addClass("col-sm-2 saveBtn");
var textarea= $("<form>").addClass("textarea")

timeRow.append(timeCol);
container.append(timeRow);
$(".hour").text("");
timeCol.after(scheduleCol);
$(".past").text("");
scheduleCol.after(saveCol);
$(".saveBtn").text("save button");
scheduleCol.append(textarea);

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


    
    // $(document).click(function(){
    //     $("text").append("<input />");
    //     $("input").text("#scheduleCol")
        
    // })

    // var newRow = $('.row');
    // for (var i = 0; i < 8; i++) {
    //   newRow.clone().insertAfter(newRow);
    // //   timeCol.attr("id", "timeDisplay" + [i]);
    // };

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