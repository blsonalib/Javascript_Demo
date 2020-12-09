// var x = 1;
// var text;
// switch (x) {
   
//     case 0:
//         text = "On";
//         break;
//     case 1:
//         text = "off";
//          break;
    
//     default:
//             text = "No result Found";
    
// }
// document.getElementById("demo").innerHTML = text;



//Common Code Block


var marks = 2 ;
var text;
switch (marks) {
    case 0:
    case 1:
        text = "Good";
        break;
    case 2:
    case 3: 
        text = "Bad";
        break;
    default:
        text = "not Valid";
}
document.getElementById("demo").innerHTML = text;