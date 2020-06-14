$(document).ready(function() {
    console.log("function working")
$("#currentDay").text(moment().format("MMMM Do YYYY"));

    var timeList = [
     "9 AM   ",
     "10 AM ",
     "11 AM ",
     "12 PM ",
     "1 PM   ",
     "2 PM   ",
     "3 PM   ",
     "4 PM   ",
     "5 PM   ",
    ];

    var currentTime = moment().format("h A");

    for (var i = 0; i < timeList.length; i++) {
    var container = $(".time-block");
    var hourList = timeList[i];
    var timeRow = $("<div class= 'row'>");
    var timeCol = $("<div class= 'col-sm-1 hour'>");
    var scheduleCol = $("<textarea class= 'col-sm-8 time-sensitive form-control'>");
    var saveCol = $("<button class= 'col-sm-1 saveBtn'>"); 
    timeRow.text(hourList);
    timeRow.append(timeCol).append(scheduleCol).append(saveCol);
    container.append(timeRow);
    scheduleCol.after(saveCol);
    $(".saveBtn").html('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/></svg>');
    saveCol.addClass(".saveBtn i:hover");
    if(hourList === currentTime) {
        $(scheduleCol).addClass("present");
    }  else if(hourList < currentTime) {
        $(scheduleCol).addClass("past");
    } else {
        $(scheduleCol).addClass("future");
    }

    $(".saveBtn").on("click", function(event) {
        var text = $(".form-control").val();
        event.preventDefault();
        if (text != "") {
            console.log(text);
        } else {
            console.log("this is empty");
        }
        localStorage.setItem("text", JSON.stringify(text))
    });

    };
});

