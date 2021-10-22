function getCurrency() {
  
var el =  document.getElementById('currency').value;
let currency = "";
switch (el) {

case "EUR":
    currency = "EUR";
    break;
case "USD":
  
    currency = "USD";
    break; 

 case "GBP":
    currency = "GBP";
    break;

case "CAD":
    currency = "CAD";
 
}
  document.getElementById("demo").innerHTML = " You chose " + currency;
}






/*function test2 (){let day; "";
let dayg; "";
switch (new Date().getDay()  ) {
case 0:
case 6:
    default:
    day = "unfortunelty neither Saturday neither Sunday"
  

    day = "weekend day";
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    day = "non weeked day";
    break;
    default:
        dayg = "error - such a day numer isnt possible"


}
document.getElementById("demo").innerHTML = "Today is " + day; "today is" + day + " (" + dayg + ")";

}
function test1(){
let day; "";
let dayg; "";
switch (new Date().getDay()  ) {

    default:
    day = "unfortunelty neither Saturday neither Sunday"
   //break;
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
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break; 
  case  6:
    day = "Saturday";

//default:
    //day = "unfortunelty neiger Saturday neither Sunday"

}
document.getElementById("demo").innerHTML = "Today is " + day; "today is" + day + " (" + dayg + ")";
}