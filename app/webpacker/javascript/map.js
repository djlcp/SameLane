google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {

  // GO Grab our info for one ride

  let from = document.getElementById('from').innerText;
  let to = document.getElementById('to').innerText;
  let latFrom = document.getElementById('latFrom').innerText;
  let lngFrom = document.getElementById('lngFrom').innerText;
  let latTo = document.getElementById('latTo').innerText;
  let lngTo = document.getElementById('lngTo').innerText;

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(latFrom, lngFrom),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  let addressArray = [
    [from, latFrom, lngFrom, 'http://maps.google.com/mapfiles/kml/paddle/A.png'],
    [to, latTo, lngTo, 'http://maps.google.com/mapfiles/kml/paddle/B.png']
  ];

  let infowindow = new google.maps.InfoWindow();

  // GO/ Show both markers and bound to them

  let marker, i;
  let bounds = new google.maps.LatLngBounds();

  for (i = 0; i < addressArray.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(addressArray[i][1], addressArray[i][2]),
      icon: addressArray[i][3],
      map: map,
      draggable: false
    });
    bounds.extend(marker.getPosition());

    //GO Click to see address info 

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent(addressArray[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  map.fitBounds(bounds);

}



