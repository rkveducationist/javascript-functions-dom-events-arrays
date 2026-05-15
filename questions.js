const questions = [

/* =========================
MCQ - JAVASCRIPT FUNCTIONS
========================= */

{
type:"mcq",
question:"What is a function in JavaScript?",
options:[
"Reusable block of code",
"Variable",
"Loop",
"Condition"
],
answer:"Reusable block of code",
hint:"Used to perform task"
},

{
type:"mcq",
question:"Which keyword is used to create function?",
options:[
"function",
"func",
"define",
"method"
],
answer:"function",
hint:"function keyword"
},

{
type:"mcq",
question:"What is function parameter?",
options:[
"Input to function",
"Output of function",
"Loop variable",
"Condition"
],
answer:"Input to function",
hint:"Passed value"
},

{
type:"mcq",
question:"What is return keyword used for?",
options:[
"Return value",
"Stop loop",
"Create variable",
"Call function"
],
answer:"Return value",
hint:"Send result"
},

/* =========================
MCQ - DOM
========================= */

{
type:"mcq",
question:"What is DOM?",
options:[
"Document Object Model",
"Data Object Method",
"Document Order Model",
"None"
],
answer:"Document Object Model",
hint:"HTML structure"
},

{
type:"mcq",
question:"Which method selects element by id?",
options:[
"getElementById",
"querySelector",
"getElements",
"findElement"
],
answer:"getElementById",
hint:"ID selector"
},

{
type:"mcq",
question:"Which method selects multiple elements?",
options:[
"querySelectorAll",
"getElementById",
"selectOne",
"getSingle"
],
answer:"querySelectorAll",
hint:"Multiple selection"
},

/* =========================
MCQ - EVENTS
========================= */

{
type:"mcq",
question:"What is an event in JavaScript?",
options:[
"User action",
"Variable",
"Loop",
"Function"
],
answer:"User action",
hint:"Click, hover"
},

{
type:"mcq",
question:"Which event occurs on click?",
options:[
"onclick",
"onhover",
"onchange",
"onload"
],
answer:"onclick",
hint:"Mouse click"
},

{
type:"mcq",
question:"Which method is used to add event listener?",
options:[
"addEventListener",
"addEvent",
"setEvent",
"listenEvent"
],
answer:"addEventListener",
hint:"Attach event"
},

/* =========================
MCQ - ARRAYS METHODS
========================= */

{
type:"mcq",
question:"forEach method is used for?",
options:[
"Iteration",
"Sorting",
"Filtering",
"Searching"
],
answer:"Iteration",
hint:"Loop alternative"
},

{
type:"mcq",
question:"map() method returns?",
options:[
"New array",
"Same array",
"Boolean",
"String"
],
answer:"New array",
hint:"Transforms data"
},

{
type:"mcq",
question:"filter() method returns?",
options:[
"Filtered array",
"Single value",
"Boolean",
"String"
],
answer:"Filtered array",
hint:"Condition-based"
},

{
type:"mcq",
question:"Which method checks at least one condition?",
options:[
"some()",
"every()",
"find()",
"map()"
],
answer:"some()",
hint:"Any true"
},

{
type:"mcq",
question:"Which method checks all conditions?",
options:[
"every()",
"some()",
"find()",
"filter()"
],
answer:"every()",
hint:"All must be true"
},

{
type:"mcq",
question:"Which method returns first matching element?",
options:[
"find()",
"filter()",
"map()",
"some()"
],
answer:"find()",
hint:"First match"
},

/* =========================
CODING - FUNCTIONS
========================= */

{
type:"code",
question:"Create simple function",

required:["function"],

hint:"Basic function",

solution:`function greet(){
  console.log("Hello");
}

greet();`
},

{
type:"code",
question:"Function with parameters",

required:["function","parameter"],

hint:"Pass values",

solution:`function add(a,b){
  return a+b;
}

console.log(add(2,3));`
},

/* =========================
CODING - DOM
========================= */

{
type:"code",
question:"Select element by id",

required:["getelementbyid"],

hint:"DOM selection",

solution:`let element = document.getElementById("demo");
console.log(element);`
},

{
type:"code",
question:"Change text using DOM",

required:["innerhtml"],

hint:"Modify content",

solution:`document.getElementById("demo").innerHTML = "Hello";`
},

/* =========================
CODING - EVENTS
========================= */

{
type:"code",
question:"Add click event",

required:["addeventlistener"],

hint:"Handle click",

solution:`document.getElementById("btn")
.addEventListener("click", function(){
  console.log("Clicked");
});`
},

/* =========================
CODING - FOREACH
========================= */

{
type:"code",
question:"Use forEach",

required:["foreach"],

hint:"Iterate array",

solution:`let arr = [1,2,3];

arr.forEach(function(num){
  console.log(num);
});`
},

/* =========================
CODING - MAP
========================= */

{
type:"code",
question:"Use map method",

required:["map"],

hint:"Transform array",

solution:`let arr = [1,2,3];

let result = arr.map(function(num){
  return num * 2;
});

console.log(result);`
},

/* =========================
CODING - FILTER
========================= */

{
type:"code",
question:"Use filter method",

required:["filter"],

hint:"Condition",

solution:`let arr = [1,2,3,4];

let result = arr.filter(function(num){
  return num > 2;
});

console.log(result);`
},

/* =========================
CODING - SOME
========================= */

{
type:"code",
question:"Use some method",

required:["some"],

hint:"Check any",

solution:`let arr = [1,2,3];

let result = arr.some(function(num){
  return num > 2;
});

console.log(result);`
},

/* =========================
CODING - EVERY
========================= */

{
type:"code",
question:"Use every method",

required:["every"],

hint:"Check all",

solution:`let arr = [1,2,3];

let result = arr.every(function(num){
  return num > 0;
});

console.log(result);`
},

/* =========================
CODING - FIND
========================= */

{
type:"code",
question:"Use find method",

required:["find"],

hint:"First match",

solution:`let arr = [1,2,3,4];

let result = arr.find(function(num){
  return num > 2;
});

console.log(result);`
}

];