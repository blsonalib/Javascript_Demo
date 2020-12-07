
// var date = new Date();
// document.getElementById("demo").innerHTML = date;

function dateFunction() {
     var d = new Date(0,9,32);         //oct 32  1900
    var d1 = new Date("1994 ,oct 30,11:34:00")
    var d2 = new Date(86, 400, 000);
    var d4 = new Date("JANUARY, 25, 2015");
    // document.getElementById("demo").innerHTML = d4.toUTCString();
    document.getElementById("demo").innerHTML = d4;
}
dateFunction();