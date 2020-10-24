$("document").ready(function () {
    //Adapted from https://www.codexworld.com/export-html-table-data-to-csv-using-javascript/
    $("#boundaryExportGeo").click(function () {
    function exportBoundaryGeoToCSV() {
      let csv = [];
      console.log(csv);
      let rows = document.querySelectorAll("#boundaryTable tr");

      for (let i = 0; i < rows.length; i++) {
        let row = [],
          cols = rows[i].querySelectorAll("td, th");
        for (let j = 0; j < cols.length; j++) row.push(cols[j].innerText);

        csv.push(row.join(","));
      }
    }
    exportBoundaryGeoToCSV();
  });
  $("#boundaryExportProjected").click(function () {
    function exportBoundaryProjectedToCSV() {
      let csv = [];
      console.log(csv);
      let rows = document.querySelectorAll("#boundaryConverted tr");

      for (let i = 0; i < rows.length; i++) {
        let row = [],
          cols = rows[i].querySelectorAll("td, th");
        for (let j = 0; j < cols.length; j++) row.push(cols[j].innerText);

        csv.push(row.join(","));
      }
    }
    exportBoundaryProjectedToCSV();
  });
});
