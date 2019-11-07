document.addEventListener("DOMContentLoaded", initMap2);

function initMap2() {
  var lat = document.getElementById('rideshare_from_attributes_lat').value;
  var lng = document.getElementById('rideshare_from_attributes_lng').value;
  var lat = document.getElementById('rideshare_to_attributes_lat').value;
  var lng = document.getElementById('rideshare_to_attributes_lng').value;
  var name = document.getElementById('rideshare_from_attributes_name').value;
  var name = document.getElementById('rideshare_to_attributes_name').value;

  // if not defined create default position
  if (!lat || !lng) {
    lat = 49.182;
    lng = -2.106;
    document.getElementById('rideshare_from_attributes_lat').value = lat;
    document.getElementById('rideshare_from_attributes_lng').value = lng;
    document.getElementById('rideshare_to_attributes_lat').value = lat;
    document.getElementById('rideshare_to_attributes_lng').value = lng;
  }

  var myCoords = new google.maps.LatLng(lat, lng);
  var mapOptions = {
    center: myCoords,
    zoom: 14
  };

  var map = new google.maps.Map(document.getElementById('map2'), mapOptions);

  var marker = new google.maps.Marker({
    position: myCoords,
    animation: google.maps.Animation.DROP,
    map: map,
    draggable: true
  });

  // refresh marker position and recenter map on marker
  function refreshMarker() {
    var lat = document.getElementById('rideshare_from_attributes_lat').value;
    var lng = document.getElementById('rideshare_from_attributes_lng').value;
    var lat = document.getElementById('rideshare_to_attributes_lat').value;
    var lng = document.getElementById('rideshare_to_attributes_lng').value;
    var name = document.getElementById('rideshare_from_attributes_name').value;
    var name = document.getElementById('rideshare_to_attributes_name').value;
    var myCoords = new google.maps.LatLng(lat, lng);
    marker.setPosition(myCoords);
    map.setCenter(marker.getPosition());
  }
  // when input values change call refreshMarker
  document.getElementById('rideshare_from_attributes_lat').onchange = refreshMarker;
  document.getElementById('rideshare_from_attributes_lng').onchange = refreshMarker;
  document.getElementById('rideshare_to_attributes_lat').onchange = refreshMarker;
  document.getElementById('rideshare_to_attributes_lng').onchange = refreshMarker;


  // when marker is dragged update input values
  marker.addListener('drag', function () {
    latlng = marker.getPosition();
    newlat = (Math.round(latlng.lat() * 1000000)) / 1000000;
    newlng = (Math.round(latlng.lng() * 1000000)) / 1000000;
    document.getElementById('rideshare_from_attributes_lat').value = newlat;
    document.getElementById('rideshare_from_attributes_lng').value = newlng;
    document.getElementById('rideshare_to_attributes_lat').value = newlat;
    document.getElementById('rideshare_to_attributes_lng').value = newlng;

    document.getElementById('rideshare_from_attributes_name').value = newlat;
    document.getElementById('rideshare_to_attributes_name').value = newlng;
  });

  // When drag ends, center (pan) the map on the marker position
  marker.addListener('dragend', function () {
    map.panTo(marker.getPosition());
  });

}


// function initMap() {

//   var lat = document.getElementById('rideshare_from_attributes_lat').value;
//   var lng = document.getElementById('rideshare_from_attributes_lng').value;
//   var lat = document.getElementById('rideshare_to_attributes_lat').value;
//   var lng = document.getElementById('rideshare_to_attributes_lng').value;

//   geocoder = new google.maps.Geocoder();



//   var latlng = new google.maps.LatLng(lat, lng);
//   var mapOptions = {
//     zoom: 8,
//     center: latlng,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   }
//   map = new google.maps.Map(document.getElementById('map'), mapOptions);
//   google.maps.event.addListener(map, 'click', function () {
//     infowindow.close();
//   });
// }

// function geocodePosition(pos) {
//   geocoder.geocode({
//     latLng: pos
//   }, function (responses) {
//     if (responses && responses.length > 0) {
//       marker.formatted_address = responses[0].formatted_address;
//     } else {
//       marker.formatted_address = 'Cannot determine address at this location.';
//     }
//     infowindow.setContent(marker.formatted_address + "<br>coordinates: " + marker.getPosition().toUrlValue(6));
//     infowindow.open(map, marker);
//   });
// }

// function codeAddress() {
//   var address = document.getElementById('rideshare_from_attributes_name').value;
//   var address = document.getElementById('rideshare_to_attributes_name').value;
//   geocoder.geocode({
//     'address': address
//   }, function (results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       map.setCenter(results[0].geometry.location);
//       if (marker) {
//         marker.setMap(null);
//         if (infowindow) infowindow.close();
//       }
//       marker = new google.maps.Marker({
//         map: map,
//         draggable: true,
//         position: results[0].geometry.location
//       });
//       google.maps.event.addListener(marker, 'dragend', function () {
//         geocodePosition(marker.getPosition());
//       });
//       google.maps.event.addListener(marker, 'click', function () {
//         if (marker.formatted_address) {
//           infowindow.setContent(marker.formatted_address + "<br>coordinates: " + marker.getPosition().toUrlValue(6));
//         } else {
//           infowindow.setContent(address + "<br>coordinates: " + marker.getPosition().toUrlValue(6));
//         }
//         infowindow.open(map, marker);
//       });
//       google.maps.event.trigger(marker, 'click');
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }





