$("document").ready(function () {
    //Function to read selected file is called when the "Load File" button is clicked.
    importedBoundaryGeoJSON = {"type":"Feature", "properties":{}, "geometry":{"type":"", "coordinates":[]}};
    $("#boundarySubmit").click(function(){
        //Assigns the chosen file to "csvInput" variable.
        function boundaryImport () {
            let csvInput = $("#boundaryFile")[0].files[0];
            //Invokes the "ReadFile" function, passing it the "csvInput" variable.
            readFile(csvInput);
        }
        boundaryImport();
        //Reads the contents of a file and outputs it as a text string.
        function readFile(fileToRead) {
            let reader = new FileReader();
            reader.readAsText(fileToRead);
            //When reader has successfully completed and passed the load event the result is written to the "readBoundaryResult" variable.
            reader.onload = function(e) {
                let readBoundaryResult = reader.result;
                textToArray(readBoundaryResult);
            }
        }
        //Function to turn text string into an array splitting by newline, and iterate through this array to build a new array which ignores the headers and parses the string items as floating numbers.
        function textToArray (textToSplit) {
            //Splits FileReader result by new line. 
            let importedBoundaryArray = [];
            let importedBoundarySplit = textToSplit.split("\n");
            importedBoundaryArray.push(importedBoundarySplit);
            //Splits Array created from initial newline split by comma, and iterates through each nested array to parse the string as a float, before writing this to a master array of coordinates. 
            let boundaryArray = [];
            let vertexBoundaryArray = [];
            for (let i = 1; i < importedBoundaryArray[0].length; i++) {
                let vertexArray = [];
                let vertexCoords = [];
                //Splits string array
                let boundaryArraySplit = importedBoundaryArray[0][i].split(",");
                for (let j = boundaryArraySplit.length -1; j >=0; j--) {
                    //Parses each split array element as a floating number. 
                    let vertexParam = parseFloat(boundaryArraySplit[j]);
                    //Pushes lat and long for each coordinate back into thier own array.
                    vertexCoords.push(vertexParam);
                }
                //Combined coordinates into a single array for the vertex. 
                vertexBoundaryArray.push(vertexCoords);
                //Pushes the combined coordinate as nested arrays within a master array for the boundary. 
            }
            boundaryArray.push(vertexBoundaryArray);
            boundaryArrayToGeoJSON(boundaryArray);
        }
        //Creates GeoJSON Object from vertexBoundaryArray.
        function boundaryArrayToGeoJSON (polygonArray) {
            importedBoundaryGeoJSON.geometry["coordinates"] = polygonArray;
            importedBoundaryGeoJSON.geometry["type"] = "Polygon";
            importedCsvBoundaryToDraw (importedBoundaryGeoJSON);
        } 
    });
    $("#linesSubmit").click(function(){
        //Assigns the chosen file to "csvInput" variable.
        function linesImport () {
            let csvInput = $("#linesFile")[0].files[0];
            //Invokes the "ReadFile" function, passing it the "csvInput" variable.
            readFile(csvInput);
        }
        linesImport();
        //Reads the contents of a file and outputs it as a text string.
        function readFile(fileToRead) {
            let reader = new FileReader();
            reader.readAsText(fileToRead);
            //When reader has successfully completed and passed the load event the result is written to the "readBoundaryResult" variable.
            reader.onload = function(e) {
                let readLinesResult = reader.result;
                textToArray(readLinesResult);
            }
        }
        //Function to turn text string into an array splitting by newline, and iterate through this array to build a new array which ignores the headers and parses the string items as floating numbers.
        function textToArray (textToSplit) {
            //Splits FileReader result by new line. 
            let importedLinesArray = [];
            let importedLinesSplit = textToSplit.split("\n");
            importedLinesArray.push(importedLinesSplit);
            //Splits Array created from initial newline split by comma, and iterates through each nested array to parse the string as a float, before writing this to a master array of coordinates. 
           let linesArray = [];
            let vertexLinesArray = [];
            for (let i = 1; i < importedLinesArray[0].length; i++) {
                let vertexArray = [];
                let vertexCoords = [];
                //Splits string array
                let linesArraySplit = importedLinesArray[0][i].split(",");
                for (let j = linesArraySplit.length -1; j >=0; j--) {
                    //Parses each split array element as a floating number. 
                    let vertexParam = parseFloat(linesArraySplit[j]);
                    //Pushes lat and long for each coordinate back into thier own array.
                    vertexCoords.push(vertexParam);
                }
                //Combined coordinates into a single array for the vertex. 
                vertexLinesArray.push(vertexCoords);
                //Pushes the combined coordinate as nested arrays within a master array for the boundary. 
            }
            linesArray.push(vertexLinesArray);  
            //Call the function to delete any lines previously drawn or loaded.
            deleteExistingLineFeatures();
            //Iterates through linesArray and filters by ID, returning an array for each individual line and converting this to GeoJSON before sending to mapbox Draw.
            for (let k = 0; k < linesArray[0].length; k++){
                //Filter array by ID value
                let singleLine = linesArray[0].filter(function(id){
                    return id[2] === k+1;
                });
                //If the array has values convert to GeoJSON and send to Mapbox Draw. 
                if (singleLine.length > 0) {
                    let lineStringToFeature = turf.lineString(singleLine);
                    importedCsvLineToDraw(lineStringToFeature);
                }
            }
        }
    });
});