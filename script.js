"use strict";

//Compound Assignment With Augmented Addition

// var a = 3;
// var b = 17;
// var c = 12;
//
//
// a +=12;
// b +=9;
// c +=7;

//Compound Assignment With Augmented Subtraction

// var a = 11;
// var b = 9;
// var c = 3;
//
// a -= 6;
// b -= 15;
// c -= 1;

//Compound Assignment With Augmented Multiplication

// var a = 5;
// var b = 12;
// var c = 4.6;
//
// a *= 5;
// b *= 3;
// c *= 10;

//Compound Assignment With Augmented Division

// var a = 48;
// var b = 108;
// var c = 33;
//
// a /= 12;
// b /= 4;
// c /= 11;

//Declare String Variables
let myFirstName = 'Alex';
let myLastName = 'Petrovich';

//Escaping Literal Quotes in Strings
// var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Quoting Strings with Single Quotes
var myStr = '<a href="https://www.example.com" target="_blank">Link</a>';

//Escape Sequences in Strings
var myStr2 = 'FirstLine\n\t\\SecondLine\nThirdLine';

//Concatenating Strings with Plus Operator
var myStr3 = "This is the start. " + "This is the end.";

//Concatenating Strings with the Plus Equals Operator
var myStr4 = "This is the first sentence. ";
myStr4 += "This is the second sentence."

//Constructing Strings with Variables
var myName = 'Alex';
var myStr5 = 'My name is ' + myName + ' and I am well!';

//Appending Variables to Strings
var someAdjective = 'xxx';
var myStr6 = "Learning to code is ";
myStr6 += someAdjective;

//Find the Length of a String
// var lastNameLength = 0;
// var lastName = "Lovelace";
//
// lastNameLength = lastName.length;

//Use Bracket Notation to Find the First Character in a String
// var firstLetterOfLastName = "";
// var lastName = "Lovelace";
//
// firstLetterOfLastName = lastName[0];

//Understand String Immutability
let myStr8 = "Jello World";
myStr8 = "Hello World"; // Change this line

//Use Bracket Notation to Find the Nth Character in a String
// var lastName = "Lovelace";
// var thirdLetterOfLastName = lastName[2]; // Change this line

//Use Bracket Notation to Find the Last Character in a String
// var lastName = "Lovelace";
// var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

//Use Bracket Notation to Find the Nth-to-Last Character in a String
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

//Word Blanks
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = `${myNoun} ${myAdjective} ${myVerb} ${myAdverb}`; // Change this line

//Store Multiple Values in one Variable using JavaScript Arrays
// var myArray = ['sdfs', 123];

//Nest one Array within Another Array
var myArray2 = [["Bulls", 23], ["White Sox", 45]];

//Access Array Data with Indexes
// var myArray3 = [50,60,70];
// let myData = myArray3[0];

//Modify Array Data With Indexes
// var myArray4 = [18,64,99];
// myArray4[0] = 45;

//Access Multi-Dimensional Arrays With Indexes
// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
//
// var myData = myArray[2][1];

//Manipulate Arrays With push()
// var myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3]);

//Manipulate Arrays With pop()
// var myArray = [["John", 23], ["cat", 2]];
// var removedFromMyArray = myArray.pop();

//Manipulate Arrays With shift()
// var myArray = [["John", 23], ["dog", 3]];
// var removedFromMyArray = myArray.shift();

//Manipulate Arrays With unshift()
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);

//Shopping List
var myList = [
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15]
];

//Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log('Hi World')
}
reusableFunction();

//Passing Values to Functions with Arguments
function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(2, 2)

//Global Scope and Functions
let myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

//Local Scope and Functions
function myLocalScope() {

    // Only change code below this line
    let myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


//Global vs. Local Scope in Functions
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    let outerWear = 'sweater';


    // Only change code above this line
    return outerWear;
}

myOutfit();

//