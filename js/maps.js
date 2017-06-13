var map;
var address = "";

var initMap = function() {
  map = new google.maps.Map(document.getElementById('main-map'), {
    zoom: 13,
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
};
