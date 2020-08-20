$("document").ready(function () {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoia3dzbmljayIsImEiOiJja2UxM3p1aGQwN25rMnJwNDFwMGtiNGVlIn0.7HoRrtOOGPl7sfGfOBaudA";

  let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
    center: [-2.995859, 53.405974], // starting position [lng, lat]
    zoom: 11, // starting zoom
  });
});
