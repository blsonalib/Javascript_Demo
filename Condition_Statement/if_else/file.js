var marks = 50;
var res = "";
if (marks <= 100) {
    res = "Condition is true";
}
document.getElementById("demo").innerHTML = res;


//if-else statement

var time = 18;
var result = "";
if (time>=24) {
    result = "good morning";
}
else {
    result = "good night";
}
document.getElementById("demo").innerHTML = result;

//if-else-if statement

var grade = 80;
var res = "";
if (grade > 50 && grade <= 70) {
     
    res = "Good";
}
else if (grade > 70 && grade <= 90) {
    res = "very Good";
}
else {
    res = "Excellent";
}
document.getElementById("demo").innerHTML = res;