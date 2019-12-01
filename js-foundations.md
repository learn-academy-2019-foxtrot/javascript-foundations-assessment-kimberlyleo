# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.
I don't really know.. But i think it will throw an error that says : variable text has already been declared with the error note listed on line 11


1b. Test the function. Explain why the function returned what it did.
Identifier 'text' has already been declared

  Your answer: var was already defined as 'outside' and then, inside the function it is redifined as 'inside'. 
  If you wanted to redefine a variable you should use: let 'text' = whatever value

  Researched answer: this Var was defined in THIS scope so it cannot be re-declared; it could have been declared but not defined initially: var text;
  and later assigned a value 


2. What is JSON?

  Your answer: a special type of javascript object

  Researched answer: JSON is an acronym: Javascript Object Notation; it is a standardized object syntax that exists as a string (different from an object literal)
  "a standard text-based format for representing structured data based on JS object syntax "
  JSON objects are often stored in their own file in a project as insertNameHere.json
  JSON can be used outside of javascriptand many programming environments can read, parse, and generate JSON 
  JSON existing as a string helps when you want data to be transmitted across a network. JSON needs to be converted to a native JS object but JS has global JSON methods for converting to native JS objects
  Syntax notes: JSON is enclosed in curly brackets, keys are STRINGS; values can be strings, numbers, booleans, null, arrays, and even object literals
  When an object literal is the value of a JSON key, it is enclosed in brackets and curly brackets ("[{   }]")


3. What does CRUD stand for?

  Your answer: no clue

  Researched answer: an acronym; CRUD = create, read, update, and delete
  decribes the four basic types of functionality that a model (of an API) should have to be considered complete; serves as a reminder for developers
  -create: model should have a function that, when called, allows you to add an object for example with data supplied by the program
  -read: should have a function that allows you to view the data (as a whole and possibly also filtered based on value or key)
  -update: should have a function that allows you to update info (for example the value of a specific object key)
  -delete: sould have a function that allows you to delete an object from a set
  

4. What does are the 5 HTTP verbs?

  Your answer: No clue

  Researched answer: post, get, put, patch, and delete. They are HTTP methods. They can be related to the CRUD terms: create, read, update, delete
  post is like create, get is like read, put and patch are like update (put is replacing a value and patch modifies a value) 


5. What is a higher-order function?

  Your answer: higher order functions take in other functions or output functions
  .map and .filter are considered higher order functions

  Researched answer: a higher order function is a function that either takes in a function as an argument or returns another function
  .map and .filter are both higher functions that have 3 built in arguments and iterate through arrays. 


6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer: no clue

  Researched answer: a closure is a combination of a function bundled together with references to its surrounding state. A closure gives you access to an outer function's scope from an inner function
  To use a closure, define a function inside another function and expose it by returning it or by passing it to another function.
  A closure is when a variable is defined and declared inside of a function. Defining the variable inside of the function makes that global variable local/private and can only be accessed by that function closure.
  Can use closure to force a variable declaration to be accessed only once. For example, when you create a counter you only want the stating value (x=0) to be accessed once while the increase +1 can be executed an infinite number of times, outside of the closure. Closures allow you declare a variable with different values in each lexicon environment becuase each declaration is local.


7. STRETCH: What is an API?

  Your answer: application program interface i think? it can be like an embedded map or interactive object on a site I think

  Researched answer: application programming interfaces. They are constructs made available in programming languages to allow developers to create complex functionality more easily.
  One example drew a parallel between writing in JS or Python rather than a ground up language like C. There are levels of abstraction in the code which are built in to languages that make them more usable (by providing easier syntax that can be used).
  There are different types of APIs and client-side javascript has many available (some are built into your browser and others are 3rd party, and these you generally need to retrieve their code via the web).
  

### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?

Favorite Board games
If you have 10 minutes in which you cant get injured or die, what would you do
would you rather go to a concert or movie theater showing
What would the name of your alter ego be
If you were a super hero what would be your name and power 


2. What was your favorite topic this week?

the daily challenges and I liked working more with higher order functions


3. What was your "A-ha!" moment this week?

a-ha i need to review css and still need to figure out how to write that piglatin code and work on react a lot... lol sorry no real a-has this week