
// if (new Date().getHours() < 18) {
  //document.getElementById("demo").innerHTML = "Good day!";
//}
 function compare_two() {
 var a = document.getElementById("aval").value;
 var b = document.getElementById("bval").value;

 var conclusion = "";

 if (a > b) {
     conclusion = "a ("+ a +") is bigger than ("+ b +")"; 
 }
 else if (a < b) {
    conclusion = " a ("+ a +") is smaller than ("+ b +")";
}
 else { 
     conclusion = " a ("+ a + ") is equal to be (" + b + ")";
 }

 {
     document.getElementById("demo").innerHTML = conclusion;
 }
  function compare_three() {
 var a =  document.getElementById("aval").value;
 var b =  document.getElementById("bval").value;
 var c =  document.getElementById("cval").value;
 var conclusion = "...";

var temp;
// const array = [a,b,c]
//Array.sort();
if (a > b) {temp = a; a = b; b = temp;}
if (b >c) {temp = b; b = c; c = temp;}
if (a > b) {temp = a; a = b; b = temp;}
    
//document.getElementById("demo").innerHTML =array.[0] + " " + array[1] + " " + array[2];
{
document.getElementById("demo").innerHTML = a + " " + " " + b + " " + c ;
}

