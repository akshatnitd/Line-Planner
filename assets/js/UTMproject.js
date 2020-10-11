import LatLon, { Cartesian, Vector3d, Dms } from 'https://cdn.jsdelivr.net/npm/geodesy@2/latlon-ellipsoidal.js';
$(document).ready(function(){
    $("#map").on("mousemove", function(){
        let cursorLat = $("#cursorLat>p>span").html();
        let cursorLong = $("#cursorLong>p>span").html();
        /*let cursorLatLon = new LatLon(latitude, longitude,);
        console.log(cursorLatLon);*/
    });
})
