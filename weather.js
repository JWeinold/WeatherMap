const container = document.getElementById("listContainer");


// create a list container in the HTML that results can be appended to
let ul = document.createElement("ul");
ul.id = "listContainer";

// callback for successfully getting location from user's browser
  function geolocSuccess(position){
  const newPos = {lat: position.coords.latitude, lng: position.coords.longitude};
  getLocation(newPos);
}

// callback for no success getting location from user's browser
function geolocError(){
  console.log("Error getting user's location :(");
}

// API call onload callback function
function onloadFunc(){
  const resp = JSON.parse(this.response);
  console.log(resp);

  //if(resp.results.length > 0){
// if results, print first result's formatted address to page
    // the first result is the most specific one
  //  printListItem(resp.results[0].formatted_address);
  //} else {
    // if no results, print an error message to page
   //printListItem("Sorry, no results were found");
}
//}
// API call onerror callback function
function onerrorFunc(){
  // print an error message to page
   printListItem("Sorry, an error occurred");
}

// helper method to call API and convert longitude & latitude to a human friendly address
function getWeather(){
  if(document.getElementById('Seattle').checked) {
      //var cityLon = "-122.3182";
      //var cityLat = "-47.6762";
      let mapUri = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=-47.6762&lon=-122.3182&units=imperial&APPID=178a29ccb40fbe761020a3e6fbfcda60";
      let request = new XMLHttpRequest();
      request.open("GET", mapUri, true);
      request.onload = onloadFunc;
      request.onerror = onerrorFunc;
      request.send();
  }
  if(document.getElementById('London').checked) {
      //var cityLon = "-122.3182";
      //var cityLat = "-47.6762";
      let mapUri = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&units=imperial&APPID=178a29ccb40fbe761020a3e6fbfcda60";
      let request = new XMLHttpRequest();
      request.open("GET", mapUri, true);
      request.onload = onloadFunc;
      request.onerror = onerrorFunc;
      request.send();
  }
  if(document.getElementById('London').checked) {
      //var cityLon = "-122.3182";
      //var cityLat = "-47.6762";
      let mapUri = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&units=imperial&APPID=178a29ccb40fbe761020a3e6fbfcda60";
      let request = new XMLHttpRequest();
      request.open("GET", mapUri, true);
      request.onload = onloadFunc;
      request.onerror = onerrorFunc;
      request.send();
    }

  //get user's location
  if(document.getElementById('MyLocation').checked) {
    function wow () {
      // get user's location from the browser
      navigator.geolocation.getCurrentPosition(geolocSuccess, geolocError);

      document.getElementById("listContainer").appendChild(ul);
      // for each object in locations list, call the api
      for(let i=0; i<locations.length;i++){
        getLocation(locations[i]);
      }
    }

      //var cityLon = "-122.3182";
      //var cityLat = "-47.6762";
      let mapUri = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&units=imperial&APPID=178a29ccb40fbe761020a3e6fbfcda60";
      let request = new XMLHttpRequest();
      request.open("GET", mapUri, true);
      request.onload = onloadFunc;
      request.onerror = onerrorFunc;
      request.send();
  }
// helper function to print message to page
function printListItem(message){
  let li = document.createElement("li");
  li.innerHTML = message;
  document.getElementById("listContainer").appendChild(li);
}
}
