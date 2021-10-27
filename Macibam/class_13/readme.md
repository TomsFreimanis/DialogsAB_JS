# JavaScript For Loop
JavaScript supports different kinds of loops:
- for - loops through a block of code a number of times
- for/in - loops through the properties of an object
- for/of - loops through the values of an iterable object
- while - loops through a block of code while a specified condition is true
- do/while - also loops through a block of code while a specified condition is true
### The for loop has the following syntax:
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
 - Statement 1 is executed (one time) before the execution of the code block.

 - Statement 2 defines the condition for executing the code block.

 - Statement 3 is executed (every time) after the code block has been executed.

## Example Explained
- The for in loop iterates over a person object
- Each iteration returns a key (x)
- The key is used to access the value of the key
- The value of the key is person[x]
 ## The For Of Loop
- The JavaScript for of statement loops through the values of an iterable object.
- It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
- variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
- iterable - An object that has iterable properties.
-
-
