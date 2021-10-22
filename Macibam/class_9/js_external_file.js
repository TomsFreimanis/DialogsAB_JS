function myFunction() {
    var text;
    var task = prompt("How much is 10 + 5?", );
    switch(task) {
      case "15":
        text = "Congratulation - You are very smart !";
        break;
     
     
      default:
        text = "You should go back to primary school";
    }
    document.getElementById("demo").innerHTML = text;
    document.getElementById("p").textContent += " this has just been added";
    
  }