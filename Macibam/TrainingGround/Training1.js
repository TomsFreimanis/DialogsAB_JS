
/*var day = new Date().getDay();
if (day == 4 || day == 5) {
    text = "gaidam nedeļas nogali";
}
   else if  (day == 0 || day == 6 ) {
        text = "nogale ir pienākusi ";
    }
    else {
        text = "vel tālu lidz brīvdienam"
    }
    document.getElementById("demo").innerHTML = text; */


   /* const time = new Date().getHours();
    let greeting;
    if (time == 10 || time == 02) {
      greeting = "Good morning";
    } else if (time == 20 || time == 21) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    document.getElementById("demo").innerHTML = greeting; */

   /* let day;
switch (new Date().getDay()) {
   
  case "svēdiena":
    day = "svēdiena";
    break;
  case "Pirmdiena":
    day = "Pirmdiena";
    break;
  case "Otrdiena":
    day = "Otrdiena";
    break;
  case "trešdiena":
    day = "trešdiena";
    break;
  case "cetrudiena":
    day = "ceturdiena";
    break;
  case "piekdiena":
    day = "piektdiena";
    break;
  case  "setsdiena":
    day = "sestdiena";
}
document.getElementById("demo").innerHTML = "šodien ir " + day +  "!!!"; */



/*function myFunction() {
  var text;
  var novads = prompt("What's your favorite cocktail drink?", "Latgale");
  switch(novads) {
    case "Vidzeme":
      text = "(lībiešu: Vidūmō[1]) ir viena no latviešu vēsturiskajām zemēm.[2] No Latgales to atdala Pededzes un Aiviekstes upes, no Sēlijas un Zemgales — Daugava, bet ziemeļos tā robežojas ar Igaunijas Republiku";
      break;
    case "Latgale":
      text = "(latgaliešu: Latgola) ir viena no latviešu vēsturiskajām zemēm.[1] Latgales teritoriālā identitāte izsekojama līdz Jersikas ķēniņa valsts laikiem 12. un 13. gadsimta mijā, kas latīņu tekstos saukta par „Letiju” (Lettia)";
      break;
    case "Kurzeme":
      text = "(lībiešu: Kurāmō[1]) jeb Kursa ir viena no latviešu vēsturiskajām zemēm.[2] Mūsdienu Kurzemes teritoriālā identitāte izsekojama kopš Kurzemes bīskapijas dibināšanas 1230. gadā?";
      break;
    case "Zemgale":
      text = "ir viena no latviešu vēsturiskajām zemēm[1], kas agrāk bija cieši saistīta ar Kurzemes un Sēlijas zemēm, tādēļ to robežas ir izplūdušas. Lielākā daļa Zemgales teritorijas ir līdzenums, atšķirībā no pārējām latviešu vēsturiskajām zemēm, kurās ir arī augstienes.";
      Break;

    default:
      text = "Tāda novada nav vai tu nepareizi ierakstīji. :(";
  }
  document.getElementById("demo").innerHTML = text;
} */

/*var name = window.prompt("What is your name");
var age = window.prompt("How old are you?");
document.write("Hey " + name + ", How are you today. Do u like being " + age + " years old ?");*/


/*var num1 = prompt("Enter number");
var num2 = prompt("Enter another number");


num1 = parseFloat(num1);
 num2 = parseFloat(num2);

document.write(num1 + num2); */
/*var fruits = ["Apples", "Oranges", "Peaches"];
fruits [0] = "Oranges"
document.write (fruits [0] ); */

var operation = promt("Please enter operation (+,-,/,%): ");
var operation = promt("Please enter first number: ").replace(",", ".");
var operation = promt("Please enter second operation ").replace(",", ".");

firstNumber = parsFloat(firstNumber);
secondNumber = parsFloat(secondNumber);

let result;
let error = "";
let errorTwo = "";
switch (operation) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
  case "/":
    result = firstNumber / secondNumber;
    break;
  case "%":
    result = firstNumber % secondNumber;
    break;
    default:
      error = "You have entered wrong operation ;("

}
if (result == undefined) {
  errortwo = "At least one variable is not number";
}
document.getElementById("demo").innerHTML = "Value is" + result + " " error + errorTwo;


 

