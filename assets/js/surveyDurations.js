$("document").ready(function(){
    $("#calcDurations").click(function(){
        let speed = parseFloat(document.getElementById("surveySpeed").value);
        console.log(speed);
        if (Number.isFinite(speed)){
            let distInMeters = parseFloat($("#lineDistance").html())*1000;
            let acqDurationHours = ((distInMeters/speed)/60)/60;
            console.log(acqDurationHours);
        } else {
            alert("Survey Speed is not a number");
        }
    });
})