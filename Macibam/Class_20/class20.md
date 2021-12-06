### Konspekts [https://www.javascripttutorial.net/javascript-bom/]

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


### ``` Section 2. Location```
#### ```JavaScript Location properties ```
``` location objects ``` The location object contains information about the current URL.
-  ```origin ``` The origin property returns the protocol, hostname and port number of a URL.
- ```  protocol```The protocol property sets or returns the protocol of the current URL, including the colon (:).
- ```host ``` The host property of the Location interface is a USVString containing the host, that is the hostname, and then, if the port of the URL is nonempty, a ':', and the port of the URL.
- ``` hostname ``` The hostname property sets or returns the hostname of a URL.
- ``` port ```  The port property of the URL interface is a USVString containing the port number of the URL. If the URL does not contain an explicit port number, it will be set to ''.
- ``` pathname ```The pathname property of the Location interface is a USVString containing the path of the URL for the location, which will be the empty string if there is no path.
- ``` search ```   search
- ``` hash ``` The hash property of the Location interface returns a USVString containing a '#' followed by the fragment identifier of the URL — the ID on the page that the URL is trying to target.
- ``` href ``` The href property sets or returns the entire URL of the current page.
#### Manipulating the location
- The Location object has a number of useful methods: ```assign(), ``` ``` reload(),``` and ```replace(). ```
- The ```  assign() ```
 method accepts an URL, navigate to the URL immediately, and make an entry in the browser’s history stack.
``` replace() ``` method is similar to the ``` assign() ``` method except it doesn’t create a new entry in the browser’s history stack. Therefore, you cannot click the back button to go to the previous page. 
``` reload()``` method reloads the currently displayed page. When you call the ``` reload() ```method with no argument, the browser will reload the page in the most efficient way e.g., it loads the page resources from the browser’s cache if they haven’t changed since the last request.
### Summary 
The ``` Location ``` object represents the current URL of a page. It can be accessed via ```window.location``` or ```document.location.```
The ```Location ```object has a number of properties that represent the URL such as``` protocol```, ```host```, ```pathname```, and ```search```.
To manipulate the location, you set its properties new values or use ```assign()```, ```replace()```, and ```reload()``` methods.


### How To Get Query String in JavaScript
#### main focus on ```URLSearchParams```
### Useful URLSearchParams methods
- ```keys()``` returns an iterator that iterates over the parameter keys.
- ```values() ``` returns an iterator that iterates over the parameter values.
- ``` entries() ```returns an iterator that iterates over the (key, value) pairs of the parameters.
 #### Summary
 - The ```URLSearchParams``` provides an interface to work with query string parameters
 - The ```URLSearchParams``` is an iterable so you can use the for...of construct to iterate over query string parameters.
 - The ```has()``` method of the ```URLSearchParams``` determines if a parameter with a specified name exists.
 

 ### Redirect to a new URL

- Sometimes, you want to redirect users to a new URL e.g., after users log in, you want to redirect them the admin homepage.
- JavaScript has the APIs that allow you to redirect to a new URL or page. However, JavaScript redirection runs entirely on the client-side therefore it doesn’t return the status code 301 (move permanently) like server redirection.
- If you want to redirect to a new page upon loading, you use the following code: ``` window.onload = function() {
    location.href = "https://www.javascripttutorial.net/"; } ``` 
#### summary 
- To redirect to a new URL or page, you assign the new URL to the location.href property or use the ```location.assign()``` method.
- The ``` location.replace()``` method does redirect to a new URL but does not create an entry in the history stack of the browser.

### Section 3. Navigator
