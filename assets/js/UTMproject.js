import { LatLon } from "https://cdn.jsdelivr.net/npm/geodesy@2/utm.js";
$(document).ready(function () {
  $("#map").on("mousemove", function () {
    let cursorLat = $("#cursorLat>p>span").html();
    let cursorLong = $("#cursorLong>p>span").html();
    let cursorLatLong = new LatLon(cursorLat, cursorLong);
    let UTM = cursorLatLong.toUtm();
    let northing = UTM["northing"];
    let easting = UTM["easting"];
    let hemi = UTM["hemisphere"];
    let zone = UTM["zone"];
    document.getElementById("cursorGeodetic").innerHTML =
      '<p class="no-margin">' + "<span> WGS84 </span>" + "</p>";
    document.getElementById("cursorNorthing").innerHTML =
      '<p class="no-margin">' +
      "<span>NORTHING: " +
      northing.toFixed(2) +
      "</span>" +
      "</p>";
    document.getElementById("cursorEasting").innerHTML =
      '<p class="no-margin">' +
      "<span>EASTING: " +
      easting.toFixed(2) +
      "</span>" +
      "</p>";
    document.getElementById("cursorUtmZone").innerHTML =
      '<p class="no-margin">' +
      "<span> UTM " +
      zone +
      " " +
      hemi +
      "</span>" +
      "</p>";
  });
// Boundary Geodetics to UTM Proejcted Coordinates
  $(document).on("keydown", function (event) {
    if (event.keyCode === 13) {
      //Code to turn boundary table data into an array
      //Code inspiration from Stack Overflow user Andreas Eriksson posted March 6th 2012
      function boundaryTableToArray() {
        let boundaryTableArray = [];
        $("#boundaryTable tr").each(function () {
          let arrayOfThisVertices = [];
          let tableData = $(this).find("td");
          if (tableData.length > 0) {
            tableData.each(function () {
              arrayOfThisVertices.push($(this).text());
            });
            boundaryTableArray.push(arrayOfThisVertices);
          }
        });
        return boundaryTableArray;
      }
      boundaryTableToArray();
      //Function that uses this array and iterates through to convert coordinates for LAT LONG to Easting and Northing.

      function convertBoundaryTableArrayToUtm() {
        let projectedArray = [];
        for (let geodeticCoords of boundaryTableToArray()) {
          let boundTableLatLong = new LatLon(
            geodeticCoords[0],
            geodeticCoords[1]
          );
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
            $("#boundaryCoords>#boundaryConverted>tbody").append(
              "<tr><td class='tableBorder'>" +
                projectedVertices[0].toFixed(2) +
                "</td><td class='tableBorder'>" +
                projectedVertices[1].toFixed(2) +
                "</td></tr>"
            );
          }
        }
        writeBoundUtmToTable();
      }
      convertBoundaryTableArrayToUtm();
    }
  });
// Line Geodetics to UTM Projected Coordinates
   $(document).on("keydown", function (event) {
    if (event.keyCode === 16) {
      //Code to turn line table data into an array
      //Code inspiration from Stack Overflow user Andreas Eriksson posted March 6th 2012
      function lineTableToArray() {
        let lineTableArray = [];
        $("#lineTable tr").each(function () {
          let arrayOfThisVertices = [];
          let tableData = $(this).find("td");
          if (tableData.length > 0) {
            tableData.each(function () {
              arrayOfThisVertices.push($(this).text());
            });
            lineTableArray.push(arrayOfThisVertices);
          }
        });
        console.log(lineTableArray);
        return lineTableArray;
      }
      lineTableToArray();
      //Function that uses this array and iterates through to convert coordinates for LAT LONG to Easting and Northing.
      function convertBoundaryTableArrayToUtm() {
        let projectedArray = [];
        for (let geodeticCoords of lineTableToArray()) {
          let lineTableLatLong = new LatLon(
            geodeticCoords[1],
            geodeticCoords[2]
          );
          let lineTableUTM = lineTableLatLong.toUtm();
          let lineNorthing = lineTableUTM["northing"];
          let lineEasting = lineTableUTM["easting"];
          let arrayOfThisProjected = [];
          arrayOfThisProjected.push(lineNorthing, lineEasting);
          projectedArray.push(arrayOfThisProjected);
        }
        function writeBoundUtmToTable() {
          $("#lineCoords>#lineConverted>tbody>tr").remove();
          for (let projectedVertices of projectedArray) {
            $("#lineCoords>#lineConverted>tbody").append(
              "<tr><td class='tableBorder'>" +
                projectedVertices[0].toFixed(2) +
                "</td><td class='tableBorder'>" +
                projectedVertices[1].toFixed(2) +
                "</td></tr>"
            );
          }
        }
        writeBoundUtmToTable();
      }
      convertBoundaryTableArrayToUtm();
    }
  });
});
