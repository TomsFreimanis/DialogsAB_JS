### Konspekts

#### Window – understand the window object.
-The global object of JavaScript in the browser is the window object. It means that all variables and functions declared globally with the var keyword become the properties and methods of the window object. For example:
- The window is the global object in the web browser.
- The window object exposes the functionality of the web browser.
 - The window object provides methods for manipulating a window such as open(), resize(), resizeBy(), moveTo(), moveBy(), and close().




 #### Alert – display an alert dialog.
 ##### To invoke an alert system dialog, you invoke the alert() method of the window object.
 - The alert() is a method of the window object.

 - The alert() method is modal and synchronous.
 - Use the alert() method to display information that you want users to acknowledge.

 ### Confirm – display a modal dialog with a question.
#### To invoke a dialog with a question and two buttons OK and Cancel, you use the confirm() method of the window object:
- The confirm() is a method of the window object.
- The confirm() shows a system dialog that consists of a question and two buttons: OK and Cancel.
- The confirm() returns true if the OK button was clicked or false if the Cancel button was selected.

### Prompt – prompt the user to input some text.
#### he prompt() is a method of the window object. It invokes a dialog that has a text input field and two buttons: OK and Cancel.
- The prompt() is a method of the window object.
- The prompt() shows a dialog that has a text input field and two buttons: OK and Cancel.
- The prompt() returns a string containing a string entered by the user or null if the user did not enter anything.

### setTimeout – set a timer and execute a callback function once the timer expires.
#### The setTimeout() is a method of the window object. The setTimeout()  sets a timer and executes a callback function after the timer expires.
- setTimeout() is a method of the window object.
- setTimeout() sets a timer and executes a callback function when the timer expires.

### setInterval – execute a callback function repeatedly with a fixed delay between each call
#### The setInterval() is a method of the window object. The setInterval() repeatedly calls a function with a fixed delay between each call.
- The setInterval() repeatedly calls a function once a fixed delay between each call.
- The setInterval() returns a timeoutID that can be passed to the clearInterval() to cancel the timeout.

In this syntax:

The callback is a callback function to be executed every delay milliseconds.
The delay is the time (in milliseconds) that the timer should delay between executions of the callback function.
The arg1, … argN are the arguments that are passed to the callback function.
