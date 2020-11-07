$("document").ready(function(){
    $("#calcDurations").click(function(){
        //Obtains the speed entered by the user in the "Survey Speed (m/s)" Input.
        let speed = parseFloat(document.getElementById("surveySpeed").value);
        //Checks the user input is a floating number.
        if (Number.isFinite(speed)){
            //Gets the total line distance from the calculated statistics and converts it to metres and then turns it from string to floating number.
            let distInMeters = parseFloat($("#lineDistance").html())*1000;
            //Checks there is a distance to compute a time from.
            if (distInMeters > 0){
                //Checks the speed is not 0m/s which resutls in infinite time.
                if (speed > 0) {
                //Distance divided by speed converted to decimal hours.
                let acqDurationDecHours = ((distInMeters/speed)/60)/60;
                //Gets just hours from the computed duration.
                let acqDurationHours = Math.floor(acqDurationDecHours);
                //Gets just decimal minutes from the computed duration.
                let acqDurationDecMinutes = (acqDurationDecHours % 1)*60;
                //Gets just minutes from the computed duration.
                let acqDurationMinutes = Math.floor(acqDurationDecMinutes);
                //Gets just seconds from the computed duration and rounds to the nearest second. 
                let acqDurationSecs = Math.round((acqDurationDecMinutes % 1)*60);
                //Writes a HTML string for this computed survey duration.
                $("#acqTime").html(" " + acqDurationHours + " hrs " + acqDurationMinutes + " mins " + acqDurationSecs + " secs ");
                } else {
                    //Alert if speed is 0m/s or less prompting user to enter a value higher than 0m/s.
                    alert("Please enter a survey speed greater than 0m/s");
                }
            } else {
                //Alret if no survey distance detected to draw lines.
                alert("No lines to survey, draw some lines to get started!")
            }    
        } else {
            //Alert if speed entered is not a floating number. 
            alert("Survey Speed is not a number");
        }
    });
})