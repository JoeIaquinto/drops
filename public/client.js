function parsePlace(event){
  //console.log(event.place);
  if(event.place.location){
    //draw marker on coords
    var pos = new google.maps.LatLng(event.place.location.latitude, event.place.location.longitude);
    addMarker([pos, event]);
  }else{
    //geocode name of location
    geocoder.geocode({'address':event.place.name}, function(res, status){
      addMarker([res[0].geometry.location, event]);
    });
    //draw marker on coords
  }
}

function findNearbyEvents(){
  FB.api('/me/events?since='+ Math.round(+new Date()/1000), function(res){
    if(res && !res.error){
      //console.log(res);
      $.each(res.data, function(index,event){
        parsePlace(event);
      })
    }
  });
}

function statusChangeCallback(response) {
    //console.log('statusChangeCallback');
    //console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      var uid = response.authResponse.userID;
      console.log('connected');
      //var accessToken = response.authResponse.accessToken;
      // Logged into your app and Facebook.
      //$('#login-button').show();
      //show map
      $('body').append("<h1>Drops</h1><div id='map'></div>");
      $.getScript('https://maps.googleapis.com/maps/api/js?key='+MAPS_API_KEY, function(){
        initMap();
        findNearbyEvents();//response.authResponse.userID
      });
      //Do do something with FB API
      $('body').append("<div id='create_event'><p>Please Create a facebook event for your drop and return to the webpage</p><a href='https://www.facebook.com/events/upcoming' target='_blank'><button>Create Event</button></a></div>");
      //$('#login-button').hide();
    } else if (response.status === 'not_authorized') {
      console.log('not authorized ')
      // The person is logged into Facebook, but not your app.
      //$('#login-button').show();
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      //$('#login-button').show();
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

window.fbAsyncInit = function() {
    FB.init({
      appId      : '947114272081141',
      xfbml      : true,
      version    : 'v2.7'
    });

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

