var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  // prevent default
  event.preventDefault();
  // create local variables for "#search-input" and "#format-input" and get their values


  // check if search input value is empty, log an error if it is and stop the function



  // setup query to go to search-results.html with the input and formats append to q and format respectively
  var queryString = ''

  // update location to query string
  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
