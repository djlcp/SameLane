document.addEventListener("DOMContentLoaded", map2);

function map2() {

  let latFrom = document.getElementById('rideshare_from_attributes_lat').value;
  let lngFrom = document.getElementById('rideshare_from_attributes_lng').value;
  let latTo = document.getElementById('rideshare_to_attributes_lat').value;
  let lngTo = document.getElementById('rideshare_to_attributes_lng').value;

  // default positions

  if (!latFrom || !lngFrom) {
    latFrom = 49.182;
    lngFrom = -2.106;
    document.getElementById('rideshare_from_attributes_lat').value = latFrom;
    document.getElementById('rideshare_from_attributes_lng').value = lngFrom;
  }

  if (!latTo || !lngTo) {
    latTo = 49.188;
    lngTo = -2.092;
    document.getElementById('rideshare_to_attributes_lat').value = latTo;
    document.getElementById('rideshare_to_attributes_lng').value = lngTo;
  }

  //GO/ Grab our coords

  let myCoordsFrom = new google.maps.LatLng(latFrom, lngFrom);
  let myCoordsTo = new google.maps.LatLng(latTo, lngTo);

  //GO/ Create map

  let mapOptions = {
    center: myCoordsTo,
    zoom: 14,
    // gestureHandling: 'cooperative'
    gestureHandling: 'greedy'
  };
  let map = new google.maps.Map(document.getElementById('map2'), mapOptions);

  //GO/ Create our markers

  let markerFrom = new google.maps.Marker({
    position: myCoordsFrom,
    animation: google.maps.Animation.DROP,
    icon: 'http://maps.google.com/mapfiles/kml/paddle/A.png',
    map: map,
    draggable: true
  });

  let markerTo = new google.maps.Marker({
    position: myCoordsTo,
    animation: google.maps.Animation.DROP,
    icon: 'http://maps.google.com/mapfiles/kml/paddle/B.png',
    map: map,
    draggable: true
  });

  // refresh marker position and recenter map on marker

  google.maps.event.addDomListener(window, 'load', refreshMarker);
  function refreshMarker() {
    let latFrom = document.getElementById('rideshare_from_attributes_lat').value;
    let lngFrom = document.getElementById('rideshare_from_attributes_lng').value;
    let latTo = document.getElementById('rideshare_to_attributes_lat').value;
    let lngTo = document.getElementById('rideshare_to_attributes_lng').value;

    // GO/Restrict to Jersey

    let options = {
      componentRestrictions: { country: 'je' }
    };

    //GO/ autocomplete

    let findNameFrom = document.getElementById('rideshare_from_attributes_name');
    let autocompleteFrom = new google.maps.places.Autocomplete(findNameFrom, options);
    google.maps.event.addListener(autocompleteFrom, 'place_changed', function () {
      let place = autocompleteFrom.getPlace();
      findNameFrom.value = place.formatted_address;
      latFrom = place.geometry.location.lat();
      lngFrom = place.geometry.location.lng();
      let myCoordsFrom = new google.maps.LatLng(latFrom, lngFrom);
      markerFrom.setPosition(myCoordsFrom);
      map.setCenter(markerFrom.getPosition());

      //GO/ Change the lat, lng when changing the name

      latFrom = (Math.round(latFrom * 1000000)) / 1000000;
      lngFrom = (Math.round(lngFrom * 1000000)) / 1000000;
      document.getElementById('rideshare_from_attributes_lat').value = latFrom;
      document.getElementById('rideshare_from_attributes_lng').value = lngFrom;
    });


    let findNameTo = document.getElementById('rideshare_to_attributes_name');
    let autocompleteTo = new google.maps.places.Autocomplete(findNameTo, options);
    google.maps.event.addListener(autocompleteTo, 'place_changed', function () {
      let place = autocompleteTo.getPlace();
      findNameTo.value = place.name;
      latTo = place.geometry.location.lat();
      lngTo = place.geometry.location.lng();
      let myCoordsTo = new google.maps.LatLng(latTo, lngTo);
      markerTo.setPosition(myCoordsTo);
      map.setCenter(markerTo.getPosition());

      //Change the lat, lng When changing the name

      latTo = (Math.round(latTo * 1000000)) / 1000000;
      lngTo = (Math.round(lngTo * 1000000)) / 1000000;
      document.getElementById('rideshare_to_attributes_lat').value = latTo;
      document.getElementById('rideshare_to_attributes_lng').value = lngTo;
    });

    let myCoordsFrom = new google.maps.LatLng(latFrom, lngFrom);
    markerFrom.setPosition(myCoordsFrom);
    map.setCenter(markerFrom.getPosition());

    let myCoordsTo = new google.maps.LatLng(latTo, lngTo);
    markerTo.setPosition(myCoordsTo);
    map.setCenter(markerTo.getPosition());
  }

  // when input values change call refreshMarker

  document.getElementById('rideshare_from_attributes_lat').onchange = refreshMarker;
  document.getElementById('rideshare_from_attributes_lng').onchange = refreshMarker;
  document.getElementById('rideshare_to_attributes_lat').onchange = refreshMarker;
  document.getElementById('rideshare_to_attributes_lng').onchange = refreshMarker;

  // when marker is dragged update input values

  markerFrom.addListener('drag', function () {
    latlngFrom = markerFrom.getPosition();
    newlatFrom = (Math.round(latlngFrom.lat() * 1000000)) / 1000000;
    newlngFrom = (Math.round(latlngFrom.lng() * 1000000)) / 1000000;
    document.getElementById('rideshare_from_attributes_lat').value = newlatFrom;
    document.getElementById('rideshare_from_attributes_lng').value = newlngFrom;
  });

  markerTo.addListener('drag', function () {
    latlngTo = markerTo.getPosition();
    newlatTo = (Math.round(latlngTo.lat() * 1000000)) / 1000000;
    newlngTo = (Math.round(latlngTo.lng() * 1000000)) / 1000000;
    document.getElementById('rideshare_to_attributes_lat').value = newlatTo;
    document.getElementById('rideshare_to_attributes_lng').value = newlngTo;
  });

  // when marker is dragged update input values

  markerFrom.addListener('drag', function () {
    position = geocodePosition(markerFrom.getPosition());
    function geocodePosition(position) {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        latLng: position
      }, function (responses) {
        if (responses && responses.length > 0) {
          updateAddress(responses[1].formatted_address);
        }
      });
    }
    function updateAddress(str) {
      document.getElementById('rideshare_from_attributes_name').value = str;
    }
  });

  markerTo.addListener('drag', function () {
    position = geocodePosition(markerTo.getPosition());
    function geocodePosition(position) {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        latLng: position
      }, function (responses) {
        if (responses && responses.length > 0) {
          updateAddress(responses[1].formatted_address);
        }
      });
    }
    function updateAddress(str) {
      document.getElementById('rideshare_to_attributes_name').value = str;
    }
  });

  // When drag ends, center(pan) the map on the marker position

  markerFrom.addListener('dragend', function () {
    map.panTo(markerFrom.getPosition());
  });
  markerTo.addListener('dragend', function () {
    map.panTo(markerTo.getPosition());
  });

}