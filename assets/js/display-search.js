var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');

function getParams() {
  // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])


  // Get the query and format values



  // fire off request to searchApi with query and format from top variable

}

function printResults(resultObj) {
  console.log(resultObj);

  // set up `<div>` to hold result content
  var resultCard = document.createElement('div');
  // add the following classes: 'card', 'bg-light', 'text-dark', 'mb-3', 'p-3'
  

  var resultBody = document.createElement('div');
  resultBody.classList.add('card-body');
  resultCard.append(resultBody);

  // create title
  var titleEl = document.createElement('h3');
  titleEl.textContent = resultObj.title;

  // create paragraph element
  var bodyContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + resultObj.date + '<br/>';

  // check if result has subject






  // check if result has description

  


  
  // create link and add href + style

  



  // append to result body

  // append to result content

}

function searchApi(query, format) {
  var locQueryUrl = 'https://www.loc.gov/search/?fo=json';

  // check if 2nd varaible, then append to url to locQueryUrl
  if (format) {

  }

  // append query to locQueryUrl

  
  fetch(locQueryUrl)
    .then(function (response) {
      // check if response is valid throw response
      

      // return json
      
    })
    .then(function (locRes) {
      // write query to page so user knows what they are viewing
      resultTextEl.textContent = locRes.search.query;

      console.log(locRes);

      // check if results are found
      // if () {

      // } else {
        // empty out content

        // loop through results 
        
      // }
    })
    .catch(function (error) {
      console.error(error);
    });
}

function handleSearchFormSubmit(event) {
  // prevent default


  // setup local variables to query "#search-input" and "#format-input" values
  

  // check if values are not found & return error
  


  // fire off request to searchApi with parameters
  
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

getParams();
