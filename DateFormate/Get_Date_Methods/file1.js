function dateFunction() {
    var d = new Date();
    // for present Months
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    document.getElementById("demo").innerHTML = month[d.getMonth()]; //dec
    //for present Days
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    document.getElementById("demo1").innerHTML = days[d.getDay()];//mon 
}
dateFunction()