
function calculate() {
    var choice = document.getElementById("choices").value;
    var a = 10, b = 5;
    switch (choice) {
        case "Addition" :
            var sum = a + b;
            document.write("Addition Of two numbers are : "+sum)
            break;
        case "Substraction" :
            sub = a - b;
            document.write("Substraction Of two numbers are : " +sub);
            break;
        case "Multiplication" :
            mult = a * b;
            document.write("Multiplication Of two numbers are : " +mult);
            break;
        default:
            document.write("invalid");
    }   
}