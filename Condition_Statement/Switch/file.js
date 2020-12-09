var date = new Date(2020,11,7);
var d = date.getDay();
var day = "";
switch (d) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wenesday";
        break;
    case 4:
        day = "Thusday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Invalid Day";
}
document.getElementById("demo").innerHTML = day;