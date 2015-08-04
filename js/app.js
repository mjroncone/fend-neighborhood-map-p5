function model() {

}


// Following functions are from GoogleMaps' API documentation:
//  https://developers.google.com/maps/documentation/javascript/tutorial
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng( 41.926411, -87.643326),
    zoom: 16
  };

  var map = new google.maps.Map(document.getElementById('map-area'),
      mapOptions);
}

function startApp() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD-9HlnwXsPlOG1m3D6UVLNrW3O5LU7CHA' +
                  '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = startApp;
