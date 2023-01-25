// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  let hourTracker = [{
    'hour-9': ""
  }, {
    "hour-10": ""
  }, {
    'hour11': ""
  }, {
    "hour-12": ""
  }, {
    'hour-13': ""
  }, {
    "hour-14": ""
  }, {
    'hour-15': ""
  }, {
    "hour-16": ""
  }, {
    "hour-17": ""
  }];

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
/* Successfully grab clicked element from event.target.nodeName
Need to figure out how to get the id of the parent div so we can store the sibling storage */

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
/* Add a function to apply certain classes to all divs in 

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
/* Use the init function to retrieve storage on load. Have a case for if null storage */

  //
  // TODO: Add code to display the current date in the header of the page.
  // dayJS code 


  // Event listener to save the written text to local storage
  $('.container-lg').on('click', function (event) {

    let clickedElement = $(event.target);
    let clickedHourID = clickedElement.closest('div[id]');
    let textToStore = clickedHourID.children('textarea').val();

    // If the user clicked on the save icon or button, then activate the save text function     
    if (clickedElement[0].nodeName == "BUTTON" || clickedElement[0].nodeName == "I" ) {
      saveText( clickedHourID, textToStore );
      retrieveText();
    }
  })

  // Function to save the text to the local storage
  function saveText( hour, text ) {
    hourTracker[hour] = text;
    localStorage.setItem('userCalendar', JSON.stringify(hourTracker))
  }

  // Function to retrieve the text and display it in the text area of what was clicked
  function retrieveText () {
    hourTracker = JSON.parse( localStorage.getItem('userCalendar'));
    console.log(hourTracker)

    // If storage is empty, reset the tracker. Else, update the textarea for each calendar hour
    if (hourTracker == null) {
      hourTracker = [{
        'hour-9': ""
      }, {
        "hour-10": ""
      }, {
        'hour11': ""
      }, {
        "hour-12": ""
      }, {
        'hour-13': ""
      }, {
        "hour-14": ""
      }, {
        'hour-15': ""
      }, {
        "hour-16": ""
      }, {
        "hour-17": ""
      }];
    } else {
      for (let i = 0; i < hourTracker.length; i++) {
        // Loop through each object in the array
        // If the value is not empty, update the innerHTML of the textarea for the div with the key id
        hourTracker[i] // This is the array
        let key = Object.keys(hourTracker[i]) //this is an array of keys of the JS object
        

      }
    }
  }

});
