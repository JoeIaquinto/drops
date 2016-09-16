var MAPS_API_KEY = "AIzaSyBbQlzITXy6GWGvQ2pVOdWGK_rw4KeEkgM";
var geolocationaddress = 'https://www.googleapis.com/geolocation/v1/geolocate?key=';
var geocoder;
var map;
var curr_loc;
var markers = [];


function initMap() {
  geocoder = new google.maps.Geocoder();
  $.post(geolocationaddress+MAPS_API_KEY, function(data){
   //console.log(data);
    curr_loc={lat: data.location.lat, lng: data.location.lng};
    map = new google.maps.Map(document.getElementById('map'), {
      center: curr_loc,
      zoom: 13
    });
    var marker = new google.maps.Marker({
      position: curr_loc,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 15,
        strokeColor: "Aqua",
        strokeOpacity: 0.6
      },
      map: map
    });
  }).error(function(){
    curr_loc={lat: -34.397, lng: 150.644};
    map = new google.maps.Map(document.getElementById('map'), {
      center: curr_loc,
      zoom: 11
    });
    var marker = new google.maps.Marker({
      position: curr_loc,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        strokeColor: lightBlue,
        strokeOpacity: 0.4
      },
      map: map
    });
  });

}

function addMarker(pos){
  var infoWindow = new google.maps.InfoWindow(), marker;

  marker = new google.maps.Marker({
    position: pos[0],
    map: map,
    title: pos[1].name
  });
  google.maps.event.addListener(marker, 'click', (function(marker) {
    return function() {
      infoWindow.setContent('<div class="info_content">'+'<span><h3>'+ pos[1].name + '<h4> Starts at: ' + pos[1].start_time + '</h4> </h3>' + "<a href='https://www.facebook.com/"+pos[1].id+"' target='_blank'><button>Go to Event</button></a>" + '</span><p>' + pos[1].description + '</p>' + '</div>');
      infoWindow.open(map, marker);
    }
  })(marker));

  markers.push(marker);
}