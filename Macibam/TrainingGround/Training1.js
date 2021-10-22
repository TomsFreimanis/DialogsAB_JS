
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


    const time = new Date().getHours();
    let greeting;
    if (time == 10 || time == 02) {
      greeting = "Good morning";
    } else if (time == 20 || time == 21) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    document.getElementById("demo").innerHTML = greeting; 

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