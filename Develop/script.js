// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

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

  // Function to grab the time -- it uses the updateClasses function to update classes 
  function retrieveTime() {
    let timeInterval = setInterval( function() {
        let today = dayjs();
        $('#currentDay').text(today.format('[The current day is: ] MMM D, YYYY'));
    })
    // $('#current-time').text(today.format('[The current day is: ] MMM D, YYYY, h:mm:ss'));
}


  // Event listener to save the written text to local storage
  $('.container-lg').on('click', function (event) {

    let clickedElement = $(event.target);
    let clickedHourElement = clickedElement.closest('div[id]');
    let textToStore = clickedHourElement.children('textarea').val();
    let clickedHourID = clickedHourElement[0].id;

    // console.log(clickedElement);
    // console.log(clickedHourElement);
    // console.log(textToStore);
    // console.log(clickedHourID);

    // If the user clicked on the save icon or button, then activate the save text function     
    if (clickedElement[0].nodeName == "BUTTON" || clickedElement[0].nodeName == "I" ) {
      saveText( clickedHourID, textToStore );
      retrieveText();
    }
  })

  // Function to save the text to the local storage
  function saveText( hour, text ) {
    hourTracker[hour] = text;
    console.log(hourTracker[hour]);
    localStorage.setItem('userCalendar', JSON.stringify(hourTracker));
  }

  // Function to retrieve the text and display it in the text area of what was clicked
  function retrieveText () {
    hourTracker = JSON.parse( localStorage.getItem('userCalendar'));
    console.log(hourTracker);

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
      let objectKeys = Object.keys(hourTracker);
      for (let i = 0; i < objectKeys.length; i++) {
        // Loop through each object in the array
        // If the value is not empty, update the innerHTML of the textarea for the div with the key id
        let key = objectKeys[i]
        $("#" + key).children('textarea').text( hourTracker[key] );     
      }
    }
  }

  function init() {
    retrieveTime();
    retrieveText();
  }

  init();

  // Create a function to assign classes to the time blocks
  function setClass() {
    $('.time-block').each( function () {

    })
  }

});
