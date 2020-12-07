function checkDate() {
    var today = new Date();
    var someDay = new Date();
    var text;
    someDay.setFullYear(2022,0,14);
    if (today < someDay) {
        text = "This is future Date";
    } else {
        text = "This is current Date";
    }
    document.getElementById("demo1").innerHTML = text;
}
checkDate();