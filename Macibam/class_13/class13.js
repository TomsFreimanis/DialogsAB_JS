const cars = ["BMW", "Volvo", "Saab", "Ford","FIat", "Audi"];

let text = "";

// for ( ; ; )
for (let i = 0; i < cars.length ; i++) {
    text += cars [i] + "<br>";
    // text = text + cars[1] + "<br>"
    // i++ -> i += 1 -> i + 1
} 
//console.log(i);
//text += cars[i] + "<br>";

document.getElementById("demo").innerHTML = text;