$("document").ready(function () {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoia3dzbmljayIsImEiOiJja2UxM3p1aGQwN25rMnJwNDFwMGtiNGVlIn0.7HoRrtOOGPl7sfGfOBaudA";

  let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
    center: [-3.0, 53.5], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
});
