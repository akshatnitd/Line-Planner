$("document").ready(function(){
    $("#calcDurations").click(function(){
        //Obtains the speed entered by the user in the "Survey Speed (m/s)" Input.
        let speed = parseFloat(document.getElementById("surveySpeed").value);
        //Obtains the time between lines entered by the user in "Est. Time Between Lines (mins)" Input.
        let perTurnTime = parseFloat(document.getElementById("turnTime").value);
        let durationsDecHoursArray = [];
    //Script to calculate Acquistion Time
        //Checks the user input is a floating number.
        if (Number.isFinite(speed)){
            //Gets the total line distance from the calculated statistics and converts it to metres and then turns it from string to floating number.
            let distInMeters = parseFloat($("#lineDistance").html())*1000;
            //Checks there is a distance to compute a time from.
            if (distInMeters > 0){
                //Checks the speed is not 0m/s which results in infinite time.
                if (speed > 0) {
                //Distance divided by speed converted to decimal hours.
                let acqDurationDecHours = ((distInMeters/speed)/60)/60;
                //Pushes acquistion decimal hours into an array for total hours calculations. 
                durationsDecHoursArray.push(acqDurationDecHours);
                //Gets just hours from the computed duration.
                let acqDurationHours = Math.floor(acqDurationDecHours);
                //Gets just decimal minutes from the computed duration.
                let acqDurationDecMinutes = (acqDurationDecHours % 1)*60;
                //Gets just minutes from the computed duration.
                let acqDurationMinutes = Math.floor(acqDurationDecMinutes);
                //Gets just seconds from the computed duration and rounds to the nearest second. 
                let acqDurationSecs = Math.round((acqDurationDecMinutes % 1)*60);
                //Writes a HTML string for this computed survey duration.
                $("#acqTotalTime").html(" " + acqDurationHours + " hrs " + acqDurationMinutes + " mins " + acqDurationSecs + " secs ");
                } else {
                    //Alert if speed is 0m/s or less prompting user to enter a value higher than 0m/s.
                    alert("Please enter a survey speed greater than 0m/s");
                }
            } else {
                //Alret if no survey distance detected to draw lines.
                alert("No lines to survey, draw some lines to get started!");
            }    
        } else {
            //Alert if speed entered is not a floating number. 
            alert("Survey Speed is not a number");
        }
    //Script to calculate Turn Time
        //Checks the user input is a floating number. 
        if (Number.isFinite(perTurnTime)) {
            //Gets the number of lines in the plan so far from the #lineCount element.
            let noTurns = parseInt(document.getElementById("lineCount").innerHTML);
            //If lines are present.
            if(noTurns > 0) {
                $("#recalcWarning").hide();
                //Calculate the turn time and converts to decimal hours. No. of turns in 1x less than the number of lines. 
                let turnDurationDecHours = ((noTurns-1)*perTurnTime)/60;
                //Pushes turn decimal hours into an array for total hours calculations. 
                durationsDecHoursArray.push(turnDurationDecHours);
                //Gets just hours from the computed duration.
                let turnDurationHours = Math.floor(turnDurationDecHours);
                //Gets just decimal minutes from the computed duration.
                let turnDurationDecMinutes = (turnDurationDecHours % 1)*60;
                //Gets just minutes from the computed duration.
                let turnDurationMinutes = Math.floor(turnDurationDecMinutes);
                //Gets just seconds from the computed duration and rounds to the nearest second. 
                let turnDurationSecs = Math.round((turnDurationDecMinutes % 1)*60);
                //Writes a HTML string for this computed turn duration.
                $("#turnTotalTime").html(" " + turnDurationHours + " hrs " + turnDurationMinutes + " mins " + turnDurationSecs + " secs ");
            //Script to calculate Total Survey Duration.
                //Uses array which the 2x subtotals were pushed to above and adds the array values together.
                let totalDurationDecHours = durationsDecHoursArray.reduce(function(a, b){
                    return a + b;
                }, 0);
                //Gets just hours from the computed duration.
                let totalDurationHours = Math.floor(totalDurationDecHours);
                //Gets just decimal minutes from the computed duration.
                let totalDurationDecMinutes = (totalDurationDecHours % 1)*60;
                //Gets just minutes from the computed duration.
                let totalDurationMinutes = Math.floor(totalDurationDecMinutes);
                //Gets just seconds from the computed duration and rounds to the nearest second. 
                let totalDurationSecs = Math.round((totalDurationDecMinutes % 1)*60);
                //Writes a HTML string for this computed total duration.
                $("#totalTime").html(" " + totalDurationHours + " hrs " + totalDurationMinutes + " mins " + totalDurationSecs + " secs ");
            } else {}
        } else {
            //Alert if Est. time between lines is not a number. 
            alert("Turn time is not a number"); 
        }
    });
})