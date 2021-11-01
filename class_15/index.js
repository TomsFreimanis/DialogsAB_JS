// myGreeting_anonymous()(); // bus kluda - vel nedriskt izmantot 


 function myGreeting() {
    alert('hello');
} 


const myGreeting_anonymous = function() {
    alert('hello');
  } 

  const poga = document.querySelectorAll('button');

  for (let i = 0; i < poga.length; i++) {
    poga[i].addEventListener(`click`, function () {
      alert(`Hello From ${i} index Of button :)`);
      console.log(poga[i]);
    });
  }




/*

  const myButton_me = document.getElementById("me");
  const myButton_me_also = document.getElementById('me_also');
  
  myButton_get_me.onclick = function () {
    alert('hello from get element(me)');
}
    
myButton_get_me_also.onclick = function () {
    alert('hello from get element (me also)');
}






//  myGreeting(); 


 /* const myButton = document.querySelectorAll('button'); // visus salasu objektaa myButton
  myButton.forEach((value, index, array) => onclick = function() {                      //  for each (value, index, array)
    alert('hello from selector (all buttons- '+index+')');
    console.log(array);
    console.log(index);
}); */

/* let x = 1;
     
   
    function a() {
      let y = 2;
      x = x* y;
      output(x);

    }
    function b() {
      let z = 3;
      x = x * z;
      output(x);
    }
    void function output(value) {
      const para = document.createElement('p');
      document.body.appendChild(para);
      para.textContent = 'Value: ' + value;
  //  return 1500;
  }

    let xx = output(x);
    console.log(xx); */
