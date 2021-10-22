let text;
var day = new Date().getDay();
  if (day == 4|| day ==5) {
    text = "Looking forward to the Weekend";
  }

  else if (day == 0 || day == 6) {
    text = "its weekend";
  }
   
  else {
    text = "Looking forward to the weekend";
}
document.getElementById("demo").innerHTML = text;