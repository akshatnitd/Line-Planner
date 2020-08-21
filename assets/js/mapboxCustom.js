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

  map.addControl(navControl, "bottom-left");
  map.addControl(userLocation, "bottom-left");
  map.addControl(scale, "bottom-right");

    map.on("load", function(){
        let draw = new MapboxDraw({
            displayControlsDefault: true,
        });
        document.getElementById("toolbar").appendChild(draw.onAdd(map));
    });
       
});