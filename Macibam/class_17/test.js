// // Create an object:
// const car = {
//     type:"Fiat",
//     model:"500",
//     color:"white",
//   fullModel: function(      ){
//       return this.type + " " + this.model;
//   }
// };



// // console.log(typeof car);
// // console.log(car );

// // Display some data from the object:
// // document.getElementById("demo").innerHTML = "The car type is " + car.type +'model is' +car["model"]
// document.getElementById("demo").innerHTML = car.fullModel(  );

// matchMedia
// car.year = 2010;
// car.fullModelWithYear = function () {
//     return this.type + " " + this.model + " " + this.year;

// }


// let x = "";
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }
// for (let i in myObj.cars) {
//   x += "<h2>" + myObj.cars[i].name + "</h2>";
//   for (let j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j] + "<br>";
//   }
// }
// document.getElementById("demo").innerHTML = x;


// class Student  
//   {  
//     constructor()  
//     {  
//        var name;  
//        var marks;  
//     }  
//         getName()  
//         {  
//           return this.name;  
//         }  
//       setName(name)  
//       {  
//         this.name=name;  
//       }  
        
//       getMarks()  
//       {  
//         return this.marks;  
//       }  
//     setMarks(marks)  
//     {  
//       this.marks=marks;  
//     }  
  
//     }  
//     var stud=new Student();  
//     stud.name = "John";
//     stud.setName("John");  
//      stud.setMarks(80);  
//      document.writeln(stud.getName()+" "+stud.getMarks());  
