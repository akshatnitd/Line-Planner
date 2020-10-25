$("document").ready(function () {
    //Function to read selected file is called when the "Load File" button is clicked.
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
            let vertexBoundaryArray = [];
            for (let i = 1; i < importedBoundaryArray[0].length; i++) {
                let vertexArray = [];
                //Splits string array
                let boundaryArraySplit = importedBoundaryArray[0][i].split(",");
                for (let j = 0; j < boundaryArraySplit.length; j++) {
                    let vertexCoords = [];
                    //Parses each split array element as a floating number. 
                    let vertexParam = parseFloat(boundaryArraySplit[j]);
                    //Pushes lat and long for each coordinate back into thier own array.
                    vertexCoords.push(vertexParam);
                    //Combined coordinates into a single array for the vertex. 
                    vertexArray.push(vertexCoords);
                }
                //Pushes the combined coordinate as nested arrays within a master array for the boundary. 
                vertexBoundaryArray.push(vertexArray);
            }
        }
    });
});