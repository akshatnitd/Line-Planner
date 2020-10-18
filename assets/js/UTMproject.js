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
    
        //Code to turn boundary table data into an array
        //Code inspiration from Stack Overflow user Andreas Eriksson posted March 6th 2012
        let boundaryTableArray = [];

        $("#boundaryTable tr").each(function() {
            let arrayOfThisVertices = [];
            let tableData = $(this).find("td");
            if (tableData.length > 0) {
                tableData.each(function() {arrayOfThisVertices.push($(this).text()); });
                boundaryTableArray.push(arrayOfThisVertices);
            }
        });
        
        function convertBoundaryTableArrayToUtm() {
            let projectedArray = [];
            for (let geodeticCoords of boundaryTableArray) {
                let boundTableLatLong = new LatLon(geodeticCoords[0], geodeticCoords[1]);
                let boundTableUTM = boundTableLatLong.toUtm();
                let boundNorthing = boundTableUTM["northing"];
                let boundEasting = boundTableUTM["easting"];
                let arrayOfThisProjected = [];
                arrayOfThisProjected.push(boundNorthing, boundEasting);
                projectedArray.push(arrayOfThisProjected);
            }
           function writeBoundUtmToTable() {
                $("#boundaryCoords>#boundaryConverted>tbody>tr").remove();
                    for (let projectedVertices of projectedArray) {
                        $("#boundaryCoords>#boundaryConverted>tbody").append("<tr><td>" + projectedVertices[0].toFixed(2) + "</td><td>" + projectedVertices[1].toFixed(2) + "</td></tr>");
                    }
                }
            writeBoundUtmToTable(); 
        }
        convertBoundaryTableArrayToUtm();
    });
    
})
