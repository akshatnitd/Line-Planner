$("document").ready(function () {
    //Adapted from https://www.codexworld.com/export-html-table-data-to-csv-using-javascript/
  $("#boundaryExportGeo").click(function () {
    function exportBoundaryGeoToCSV() {
      let csv = [];
      let rows = document.querySelectorAll("#boundaryTable tr");

      for (let i = 0; i < rows.length; i++) {
        let row = [],
          cols = rows[i].querySelectorAll("td, th");
        for (let j = 0; j < cols.length; j++) row.push(cols[j].innerText);

        csv.push(row.join(","));
      }
      downloadBoundaryGeoCSV(csv.join("\n"));
    }
    exportBoundaryGeoToCSV();
    function downloadBoundaryGeoCSV(csv) {
        let csvFile;
        let downloadLink;
        csvFile = new Blob([csv], {type: "text.csv"});
        downloadLink = document.createElement("a");
        downloadLink.download = "boundaryExportGeodetic.csv";
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }
  });
  $("#boundaryExportProjected").click(function () {
    function exportBoundaryProjectedToCSV() {
      let csv = [];
      let rows = document.querySelectorAll("#boundaryConverted tr");

      for (let i = 0; i < rows.length; i++) {
        let row = [],
          cols = rows[i].querySelectorAll("td, th");
        for (let j = 0; j < cols.length; j++) row.push(cols[j].innerText);

        csv.push(row.join(","));
      }
      downloadBoundaryProjectedCSV(csv.join("\n"));
    }
    exportBoundaryProjectedToCSV();
    function downloadBoundaryProjectedCSV(csv) {
        let csvFile;
        let downloadLink;
        csvFile = new Blob([csv], {type: "text.csv"});
        downloadLink = document.createElement("a");
        downloadLink.download = "boundaryExportProjected.csv";
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }
  });
  $("#lineExportGeo").click(function () {
    function exportLineGeoToCSV() {
      let csv = [];
      let rows = document.querySelectorAll("#lineTable tr");

      for (let i = 0; i < rows.length; i++) {
        let row = [],
          cols = rows[i].querySelectorAll("td, th");
        for (let j = 0; j < cols.length; j++) row.push(cols[j].innerText);

        csv.push(row.join(","));
      }
      downloadLineGeoCSV(csv.join("\n"));
    }
    exportLineGeoToCSV();
    function downloadLineGeoCSV(csv) {
        let csvFile;
        let downloadLink;
        csvFile = new Blob([csv], {type: "text.csv"});
        downloadLink = document.createElement("a");
        downloadLink.download = "lineExportGeodetic.csv";
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }
  });
  $("#lineExportProjected").click(function () {
    function exportLineProjectedToCSV() {
      let csv = [];
      let rows = document.querySelectorAll("#lineConverted tr");

      for (let i = 0; i < rows.length; i++) {
        let row = [],
          cols = rows[i].querySelectorAll("td, th");
        for (let j = 0; j < cols.length; j++) row.push(cols[j].innerText);

        csv.push(row.join(","));
      }
      downloadLineProjectedCSV(csv.join("\n"));
    }
    exportLineProjectedToCSV();
    function downloadLineProjectedCSV(csv) {
        let csvFile;
        let downloadLink;
        csvFile = new Blob([csv], {type: "text.csv"});
        downloadLink = document.createElement("a");
        downloadLink.download = "lineExportProjected.csv";
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }
  });
});
