/*setDate()	
setFullYear()	
setHours()
setMilliseconds()	
setMinutes()	
setMonth()	
setSeconds()	
setTime()*/

function setDateMethods() {
    let d = new Date();
    d.setDate(d.getDate() + 60);
    
    document.getElementById("demo").innerHTML = "This is set the date: " + d;
    d.setMonth(5)
    document.getElementById("demo").innerHTML = "This is set the Months: "+d;
    d.setFullYear(2018);
    document.getElementById("demo").innerHTML = "This is set the fullYear: " + d;
    d.setHours(22);
    document.getElementById("demo").innerHTML = "This is set the hours: " + d;
    d.setMinutes(22);
    document.getElementById("demo").innerHTML = "This is set the Minuts: " + d;
    d.setSeconds(55);
    document.getElementById("demo").innerHTML = "This is set the Seconds: " + d;
    d.setMilliseconds(999)
    document.getElementById("demo").innerHTML = "This is set the MillisSeceonds: " + d;
   
}
setDateMethods();
