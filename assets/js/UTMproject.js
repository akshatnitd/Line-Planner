import { LatLon } from 'https://cdn.jsdelivr.net/npm/geodesy@2/utm.js';
$(document).ready(function(){
    $("#map").on("mousemove", function(){
        let cursorLat = $("#cursorLat>p>span").html();
        let cursorLong = $("#cursorLong>p>span").html();
        let cursorLatLong = new LatLon(cursorLat, cursorLong,);
        let UTM = cursorLatLong.toUtm();
        let northing = UTM["northing"];
        let easting = UTM["easting"];
        let hemi = UTM["hemisphere"];
        let zone = UTM["zone"];
        document.getElementById("cursorGeodetic").innerHTML =
            '<p class="no-margin">' + '<span> WGS84 </span>' + '</p>'
        document.getElementById("cursorNorthing").innerHTML =
            '<p class="no-margin">' + '<span>NORTHING: ' + northing.toFixed(2) + '</span>' + '</p>'
        document.getElementById("cursorEasting").innerHTML =
            '<p class="no-margin">' + '<span>EASTING: ' + easting.toFixed(2) + '</span>' + '</p>'
        document.getElementById("cursorUtmZone").innerHTML =
            '<p class="no-margin">' + '<span> UTM ' + zone + ' ' + hemi + '</span>' + '</p>'
    });
})
