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

  map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
  map.addControl(new mapboxgl.GeolocateControl(), "top-left");
});
