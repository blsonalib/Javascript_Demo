// getFullYear()	
// getMonth()
// getDate()	
// getHours()	
// getMinutes()	
// getSeconds()	
// getMilliseconds()	
// getTime()	
// getDay()	
// Date.now()	

function getDateMethod() {
    var d = new Date();
    var d = new Date("6 dec 2020 22:05:55:900");
    document.getElementById("demo").innerHTML = "This is Date: "+d.getDate();  //25
    document.getElementById("demo1").innerHTML = "This is Month: " + d.getMonth(); //dec
    document.getElementById("demo2").innerHTML = "This is FullYear: " + d.getFullYear();// 2015
    document.getElementById("demo3").innerHTML = "This is Day: " + d.getDay();   //0 sunday
    document.getElementById("demo4").innerHTML = "This is hours: " + d.getHours();//22
    document.getElementById("demo5").innerHTML = "This is Minutes: " + d.getMinutes(); //05
    document.getElementById("demo6").innerHTML = "This is Seconds: " + d.getSeconds(); //55
    document.getElementById("demo7").innerHTML = "This is Milliseconds: " + d.getMilliseconds();//900
    document.getElementById("demo8").innerHTML = "This is Time: " +d.getTime();
    document.getElementById("demo9").innerHTML = "This is now date: " +Date.now();
}
getDateMethod();








