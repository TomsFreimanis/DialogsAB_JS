// function testExample(a) {
//     var greeting = "Hi ! my name is" + a;
//    return greeting;
// }
// var name = "Don"
//  console.log(testExample(" Toms"));





// var testExample = function() {
//     var greeting = "my favorit series are " + a + b;
// return greeting;

// }
// var a = " rick";
// var b = " and morty"
// console.log(testExample());

// (function() {
//     var greeting = "my favorit series are " + a + b;
//     var a = " rick";
//     var b = " and morty"
//    console.log(greeting);
// }())




// function toCelsius(f) {
// var result =  (f-32) * (5/9);
// return result;

// };

// var myTemp = toCelsius(100);
// console.log("My temp in C is",myTemp,"degree");


// function hoursInMonth() {
//     var result = 24 * 30;
//     return result;
// }
// var days = hoursInMonth();
//  console.log("in 30 days there are",days,"hours");

 function addFormula(x,y){
     return x + y;

 }

 function substractFormula(x,y){
    return x - y;
    
}

function doMath() {
    var n1 = Number(document.getElementById('num1').value);
    var n2 = Number(document.getElementById('num2').value);

var sum = addFormula(n1,n2);
var sub = substractFormula(n1,n2);

console.log(sum);
console.log(sub);


}

document.getElementById('calcButton').addEventListener('click',doMath)