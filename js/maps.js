var map;
var geocoder;
var address;
var autocomplete;

var initMap = function() {
  map = new google.maps.Map(document.getElementById('main-map'), {
    zoom: 15,
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(pos);
    }, function() {
      console.log("Geolocation not authorized");
    });
  } else {
    console.log("Geolocation not available");
  }
  initAutoComplete();
};

var setAddress = function(address) {
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      map.setCenter(results[0].geometry.location);
    } else {
      console.log('Geocode not successful');
    }
  });
};

var initAutoComplete = function() {
  var input = document.getElementById('address-box');
  var autocompleteOptions = {
    types: ['geocode'],
  };
  autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions);
}
