
//-------------------------Part 1 -----------------------------
let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

console.log(String(num).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

if (String(num).includes(".")){
  console.log(String(num).length - 1)
} else {
  console.log(String(num).length);  

}

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

//---------------------------Part 2 -------------------------------------

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.
console.log("1: " + dna);

//a) Use the .trim() method to remove the leading and trailing whitespace, then print the result.

console.log("\n" + "2: " + dna.trim());

//b) Change all of the letters in the dna string to UPPERCASE, then print the result.
  console.log("\n" + "3: " + dna.toUpperCase());

//c) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

console.log("\n" + "4: " + dna.trim().toUpperCase());

//---------------------------------------DNA Strings --------------------------------

let dna2 = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//a) Replace the gene "GCT" with "AGG", and then print the altered strand.

dna2 = dna2.replace('GCT', 'AGG');
console.log("\n" + "replaced string sections: " + dna2);

//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

let newDna2 = dna2.indexOf('CAT');

if (newDna2 > 0){
  console.log("\n" + "CAT gene found.");
} else {
  console.log("\n" + "CAT gene NOT found.");
}

//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

console.log("\n" + dna2.slice(20, 23));


//d) Use a template literal to print, "The DNA strand is ___ characters long."

console.log("\n" + `The DNA strand is ${dna2.length} characters long.`)

//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.


//--------------------------------------- part 3 --------------------------


let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.

console.log("\n" + language.slice(0, 1) + language.slice(4, 5));


//b) Without using .slice(), use method chaining to accomplish the same thing.

let initials = language.replace('ava','').replace('cript','');

console.log("\n" + initials);

//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."

console.log("The abbreviation for 'JavaScript' is " +  `${initials}`);

//d) Just for fun, try chaining 3 or more methods together, and then print the result.


/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */

//**this is a bit convoluted---needs review!
let notTitle = 'title case';
let title = notTitle.replace(notTitle[0],notTitle[0].toUpperCase()).replace(notTitle[notTitle.indexOf(' ')+1],notTitle[notTitle.indexOf(' ')+1].toUpperCase());
console.log(title);


//-------------------------------------Arrays exercises #1 -------------------------------------------

//Create an array that can hold 4 items name practiceFile.

let practiceFile = [
  "first",
  "second", 
  24,
  "fourth"
];

//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.
practiceFile.push(42);
console.log("\n" + practiceFile);

practiceFile.push("hello");
console.log("\n" + practiceFile);

//Use a SetValue to add the items "false", and "-4.6", and “87” to the array.  Print the array to confirm the changes.

practiceFile.push("false", -4.6, 87);
console.log("\n" + practiceFile);

//---------------------------------------Arrays exercises part 2 -------------------

let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//a) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.

cargoHold[5] = 'space tether';
console.log("\n" + cargoHold);

//b) Remove the last item from the array with pop. Print the element removed and the updated array.

console.log("\n" + cargoHold.pop());
console.log("\n" + cargoHold);

//c) Remove the first item from the array with shift. Print the element removed and the updated array.
console.log("\n" + cargoHold.shift());
console.log(cargoHold);


//d) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.

console.log("\n" + cargoHold.unshift('20 meters'));
console.log("\n" + cargoHold);

//e) Use a template literal to print the final array and its length.

console.log(`The final array ${cargoHold} has a length of ${cargoHold.length} long`);


let cargoHold2 = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

//--------------------------------------------Arrays exercises part 3 -------------------------------------




//Use splice to make the following changes to the cargoHold array. Be sure to print the array after each step to confirm your updates.

//a) Insert the string 'keys' at index 3 without replacing any other entries.



//b) Remove ‘instruction manual’ from the array. (Hint: indexOf is helpful to avoid manually counting an index).



//c) Replace the elements at indexes 2 - 4 with the items ‘cat’, ‘fob’, and ‘string cheese’.


//---------------------------------- For Loops Exercises -------------------------------------

/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

/* A. */
console.log("Part A: ")
for (let i = 0; i < 21; i++) {
  console.log("\n" +  i );
}
console.log("\n");

/* B */ 
console.log("Part B: ")

for (let i = 0; i < 30; i++){
  if (i % 2 != 0) {
    console.log("\n" + i);
  }
}
console.log("");


/* C */
console.log("Part C: ");

for(let i = 13; i > -15; i--) {  //set i to equal the highest number
  if(i % 2 == 0){
    console.log("\n" + i);
  }
}
  console.log("");


/* Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 





/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */


  //------------------------Functions practice 10----------------------------



function makeLine(size){
  //you want to console.log #####
 line = ''; //remember to assign something to hold the new line
  
  for (let i = 0; i < size; i++) {  //create a loop to cycle through
   
    line += "#"; //make sure line is added up
  }
    return line; //be sure to add a return statement

}
console.log(makeLine(5));




function makeSquare(size){
  square = '';

  for (let i = 0; i < size; i++){

    square += "\n" + makeLine(5);
  }
  return square;
}

console.log(makeSquare(5));
