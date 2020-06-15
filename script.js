$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
  
    // this is the time list
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
    //this is showing how to format the time above. It is collecting the hour and then AM/PM
    var currentTime = moment().format("h A");
  
    // this for loop is iterating through the time and making sure that each row lines up 
    // with each time List that is above
    for (var i = 0; i < timeList.length; i++) {
        //I used the classes from the CSS that was given to us
      var container = $(".time-block");
      var hourList = timeList[i];
      var timeRow = $("<div class= 'row'>");
      var timeCol = $("<div class= 'col-sm-1 hour'>");
      // by adding all of this as an object, I can create id's specific to every column which 
      // is later used when saving items to each specific column
      var scheduleCol = $("<textarea>", {
        class: "col-sm-8 time-sensitive form-control",
        id: "text-" + i,
        "data-index": i,
        text:JSON.parse(localStorage.getItem("text-" + i)),
      });
      // each save button is specific to an ID and then when I click the button, it is making it specific 
      // to the ID
      var saveCol = $("<button>", {
        class: "col-sm-1 saveBtn",
        id: "btn-" + i,
        "data-index": i,
        // this is saying that as you click on a specific index in the array, you are saving the text that is entered
        click: function (i) {
            //this is confirming that each ID is working for both the schedule and column indexes
          console.log($(this));
          // then I add a text Value- when you click on the save button, it's grabbing the sibling, which in this 
          // case is the text area and giving it the value of what the user inputted
          var textVal = $(this).siblings("textarea").val();
            //this key could be any other variable, but I wanted to keep it simple, since i had so many texts already
            // when the text is put in, we are stating that if any text is put in, we will console log the text and if
            //nothing is put in, but the save button is clicked, then it will say, this is empty. The local storage,
            // allows the text that was entered to be stored locally. It is then displayed on line 33- where we are calling
            // it back as text!
          var key = $(this).attr("data-index");
          if (textVal) {
            console.log("text you entered: ", textVal);
          } else {
            console.log("this is empty");
          }
          localStorage.setItem("text-" + key, JSON.stringify(textVal));
        },
      });
      // this is showing everything where they need to go in the main container- this is what makes the page look like it does
      // and put everything in it's place
      timeRow.text(hourList);
      timeRow.append(timeCol).append(scheduleCol).append(saveCol);
      container.append(timeRow);
      scheduleCol.after(saveCol);
      // this is the save button and what allows the picture
      $(".saveBtn").html(
        '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/></svg>'
      );
      saveCol.addClass(".saveBtn i:hover");
      

      // this is my time element- it gives each column a class that is setting it to the present. past, and future
      // classes that correlate to the CSS classes. The 9am block does not work as the spaces in my time list need to
      // be military time (it's thinking 9 should go before a later time ie- 3pm), but when I list it as H and A on line 17, 
      // it should override that, and it's wanting me to change to military time, but if I did that, it is not going to be user 
      // friendly to the user. 
      if (hourList.match(currentTime)) {
        $(scheduleCol).addClass("present");
      } else if (hourList < currentTime) {
        $(scheduleCol).addClass("past");
      } else {
        $(scheduleCol).addClass("future");
      }
    }
  });

