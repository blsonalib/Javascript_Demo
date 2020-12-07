function datePars() {
    var msec = Date.parse("mar 25");
    var d = new Date(msec);
    document.getElementById("demo").innerHTML = d;
}
datePars();