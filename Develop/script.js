// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Define global variables
  let hourTracker = {
    '9': "",
    "10": "",
    '11': "",
    "12": "",
    '13': "",
    "14": "",
    '15': "",
    "16": "",
    "17": ""
  };
  let today = dayjs();
  let currentHour =  parseInt( today.format('HH') );

  // Function to grab the time -- it uses the updateClasses function to update classes 
  function retrieveTime() {
    let timeInterval = setInterval( function() {
        $('#currentDay').text(today.format('[The current day is: ] MMM D, YYYY'));
        updateClasses();
    }, 1000)
  }

  // Function to save the text to the local storage
  function saveText( hour, text ) {
    hourTracker[hour] = text;
    localStorage.setItem('userCalendar', JSON.stringify(hourTracker));
  }

  // Function to retrieve the text and display it in the text area of what was clicked
  function retrieveText () {
    hourTracker = JSON.parse( localStorage.getItem('userCalendar'));

    // If storage is empty, reset the tracker. Else, update the textarea for each calendar hour
    if (hourTracker == null) {
      hourTracker = {
        '9': "",
        "10": "",
        '11': "",
        "12": "",
        '13': "",
        "14": "",
        '15': "",
        "16": "",
        "17": ""
      };
    } else {
      // Get an array of keys that are filled with the time-block ID's
      let objectKeys = Object.keys(hourTracker);
      for (let i = 0; i < objectKeys.length; i++) {
        //Grab the key 
        let key = objectKeys[i]
        // Update the text area for each timeblock using the ID
        $("#" + key).children('textarea').text( hourTracker[key] );     
      }
    }
  }

  // Event listener to save the written text to local storage
  $('.container-lg').on('click', function (event) {

    let clickedElement = $(event.target);  // gives jQuery object of the clicked element
    let clickedHourElement = clickedElement.closest('div[id]'); //Gives the jQuery object of the closest div with an id (the timeblock)
    let textToStore = clickedHourElement.children('textarea').val(); // Gives the text in the textarea of the block that was clicked
    let clickedHourID = clickedHourElement[0].id; //Gives the ID of the block that was clicked

    // If the user clicked on the save icon or button, then activate the save text function     
    if (clickedElement[0].nodeName == "BUTTON" || clickedElement[0].nodeName == "I" ) {
      saveText( clickedHourID, textToStore );
      retrieveText();
    }
  })

  // Create a function to assign classes to the time blocks
  function updateClasses() {

    // loop through the time blocks
    $('.time-block').each( function () {

      // Select the current hour of the time block
      timeBlockHour = parseInt(this.id);

      // Assign classes to each timeblock based on the currentHour
      if (timeBlockHour < currentHour) {
        $(this).removeClass('present future').addClass('past')
      } else if (timeBlockHour == currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }

    })
  
  }

    // Create the initialize function which displays previously stored info and displays the date
    function init() {
      retrieveTime();
      retrieveText();
    }
  
    init();
});
