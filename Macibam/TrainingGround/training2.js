// function greet () {
//     console.log("Hello world")
// }

// greet();

// const speak = function(name = 'luigi', time = 'night') {
// console.log('good day ${name} ${time}');

// };

// speak();


function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }


  var a, b, c, d, e, f, g;
a = factorial(1); // a gets the value 1
b = factorial(2); // b gets the value 2
c = factorial(3); // c gets the value 6
d = factorial(4); // d gets the value 24
e = factorial(5); // e gets the value 120
f = factorial(6);
g = factorial(7);


// function tableCreation() {
//     var tableOfArrays = "";
//     anwsers.push(number + " " + number + " " + answer);
//     for (let i = 0; i < anwsers.length; i++) {
//         tableOfArrays += anwsers[i] + "<br>";
//     }
//     return tableOfArrays;
// }

// function getFactorial() {
//     for (var i = number; i >= 1; i--) {
//         answer = answer * i;
//     }
    
//     document.getElementById("loop").innerHTML =
//         tableCreation();
// }

// function getStandartAndwer() {
//     document.getElementById("loop").innerHTML =
//         tableCreation();
// }
