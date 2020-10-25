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
                console.log(readBoundaryResult);
            }
        }
    });
});