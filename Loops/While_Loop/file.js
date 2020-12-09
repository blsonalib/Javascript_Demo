function tables() {
    var i = 5;
    var j = 1;
    while (i <= 50) {
        var data= document.write("5 "+" * " +j+" =  "+i)
        i += 5;
        j++;
        document.write("<br>")
    }
    document.getElementById("demo").innerHTML = data;
}

