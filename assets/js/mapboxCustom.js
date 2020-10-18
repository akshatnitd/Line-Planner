$("document").ready(function () {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoia3dzbmljayIsImEiOiJja2UzMDY3eDAwZWZvMnlwZHk2bWJ3OXkxIn0.prNYik8MEfEYiueN0vP58Q";

  let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
    center: [-2.995859, 53.405974], // starting position [lng, lat]
    zoom: 11, // starting zoom
    logoPosition: "top-right",
  });
// Map type dropdown selector listener and setter
  $("#mapStyles").click( function setLayer() {
    $("#mapStyles").change(function(event) { 
        let layerId = $(this).val()
        switchLayer(layerId);
    })
  })

// Code inspiration from mapbox API documentation, modified to work on a dropdown
  function switchLayer (setId) {
    map.setStyle('mapbox://styles/mapbox/' + setId);
  }
 
  let navControl = new mapboxgl.NavigationControl({
    showZoom: false,
    visualizePitch: true,
  });

  let userLocation = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
  });

  let scale = new mapboxgl.ScaleControl({
    maxWidth: 200,
    unit: "metric",
  });

  document.getElementById("toolbar").appendChild(navControl.onAdd(map));
  document.getElementById("toolbar").appendChild(userLocation.onAdd(map));
  map.addControl(scale, "bottom-right");

    map.on("load", function(){
        let draw = new MapboxDraw({
            displayControlsDefault: true,
        });
        document.getElementById("toolbar").appendChild(draw.onAdd(map));

        map.on('draw.create', getPolygon);

        function getPolygon(e) {
            let data = draw.getAll();
            let polygonCoords = (data.features[0].geometry.coordinates[0]);
            console.log(polygonCoords);
        };
    });

    
    
    // Show cursor location. Inspired by Mapbox GL API documentation
    function reportCursorPos() {
        map.on("mousemove", function(e) {
            let longitude = JSON.stringify(e.lngLat["lng"]);
            let latitude = JSON.stringify(e.lngLat["lat"]);
            document.getElementById("cursorLat").innerHTML =
            // e.lngLat is the longitude, latitude geographical position of the mousemove event.
            // Latitude and Longitude targeted specifically and reported into separate elements.
            '<p class="no-margin">LAT: ' + '<span>' + parseFloat(latitude).toFixed(7) + '</span>' + '</p>'
            document.getElementById("cursorLong").innerHTML =
            '<p class="no-margin">LONG: ' + '<span>' +  parseFloat(longitude).toFixed(7) + '</span>' + '</p>'
        });
    };
    reportCursorPos();
    //On touch end the footer reports the last touch position in Lat and Long. 
    function reportLastTouchPos() {
        map.on("touchend", function(e) {
            let longitude = JSON.stringify(e.lngLat["lng"]);
            let latitude = JSON.stringify(e.lngLat["lat"]);
            document.getElementById("cursorLat").innerHTML =
            // e.lngLat is the longitude, latitude geographical position of the mousemove event.
            // Latitude and Longitude targeted specifically and reported into separate elements.
            '<p class="no-margin">LAT: ' + '<span>' + parseFloat(latitude).toFixed(7) + '</span>' + '</p>'
            document.getElementById("cursorLong").innerHTML =
            '<p class="no-margin">LONG: ' + '<span>' +  parseFloat(longitude).toFixed(7) + '</span>' + '</p>'
        });
    };
    reportLastTouchPos();
});