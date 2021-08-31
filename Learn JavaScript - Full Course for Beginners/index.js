// // This is how you comment in JS

// var number = 5; // This is an in-line comment

// /* Can also do multiline comments using \/\* and \*\/

// escape characters using \

// afswg
// awgawd
// getComputedStyleFRw
// f */

// number = 9;

// /* Data Types:
// undefined, null, boolean, string, symbol, number, object */

// var myName = "Tom";

// myName = 8;

// let ourName = "freeCodeCamp";

// const pi = 3.14;

// // semicolons not actually required? They just show the end of a line?

// var a; // declaring variable
// var b = 2; // declaring and assigning variable

// a = 7;

// b = a;

// console.log(a) // records in browser console. similar to print() in python.

// // Initializing 3 variables:
// var a = 5;
// var b = 10;
// var c = "I am a ";

// a = a + 1;
// b = b + 5;
// c = c + "String!";

// // case matters. variables need to respect upper/lower case. var A is different than var a
// // camelCase is considered best practice in JS
// // Declarations:
// var studlyCapVar; // var StUdLyCapVaR;
// var properCamelCase; // var properCamelCase;
// var titleCaseOver; // var TitleCaseOver;

// // Assignments:
// studlyCapVar = 10; // STUDLYCAPVAR = 10;
// properCamelCase = "A String"; // PRoperCAmelCAse = "A String";
// titleCaseOver = 9000; // tITLEcASEoVER = 9000;

// var sum = 10 + 5;
// console.log(sum);

// var difference = 45 - 33;
// console.log(difference);

// var product = 8 * 10;
// console.log(product);

// var quotient = 66 / 2;
// console.log(quotient);

// var myVar = myVar + 1;
// myVar++; //same thing as + 1

// myVar = 11;
// myVar = myVar - 1;
// myVar--; // same thing as - 1

// var ourDecimal = 5.7;

// var myDecimal = 0.00009;

// var product = 2.0 * 2.5;
// console.log(product);

// var quotient = 4.4 / 2.0;
// console.log(quotient);

// var remainder;
// remainder = 11 % 3; // Answer is the remainder (2)

// var a = 3;
// var b = 17;
// var c = 12;

// a = a + 12;
// a += 12;
// b = 9 + b;
// b += 9;
// c = c + 7;
// c += 7;

// a = a - 6;
// a -= 6;
// b = b - 15;
// b -= 15;
// c = c - 1;
// c -= 1;

// a = a * 5;
// a *= 5;
// b = 3 * b;
// b *= 3;
// c = c * 10;
// c *= 10;

// a = a / 12;
// a /= 12;
// b = b / 4;
// b /= 4;
// c = c / 11;
// c /= 11;

// var firstName = "Alan";
// var lastName = "Turing";

// var myFirstName = "Tom";
// var myLastName = "Chacko";

// // use \ to escape characters
// var myStr = "I am a \"double quoted\" string inside \"double quotes\"";

// // by using single quotes ', we can use double quotes " inside without escaping:
// // we can also use back ticks `
// var myStr = `'<a href="http://www.example.com" target="_blank">Link</a>'`;

// /***
// \' single quote
// \" double quote
// \\ backslash
// \n newline
// \r carriage return
// \t tab
// \b backspace
// \f form feed
// ***/

// var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// var ourStr = "I come first. " + "I come second.";

// var myStr = "This is the start. " + "This is the end.";
// console.log(myStr);

// var ourStr = "I come first.";
// ourStr += "I come second.";

// var myStr = "This is the first sentence. ";
// myStr += "This is the second sentence.";
// console.log(myStr);

// ourName = "freeCodeCamp";
// var ourStr = "Hello, our name is " + ourName + ", how are you?";

// var myName = "Tom";
// var myStr = "Hello, my name is " + myName + " and I am well!";
// console.log(myStr);

// var anAdjective = "awesome!";
// var ourStr = "freeCodeCamp is ";
// ourStr += anAdjective;

// var someAdjective = "worthwhile";
// var myStr = "Learning to code is ";
// myStr += someAdjective;

// var firstNameLength = 0;
// var firstName = "Ada";

// firstNameLength = firstName.length;

// var lastNameLength = 0;
// var lastName = "Lovelace";

// lastNameLength = lastName.length;
// console.log(lastNameLength);

// var firstLetterOfFirstName = "";
// var firstName = "Ada";

// firstLetterOfFirstName = firstName[0];

// var firstLetterOfLastName = "";
// var lastName = "Lovelace";

// firstLetterOfLastName = lastName[0];
// console.log(firstLetterOfLastName);
// secondLetterOfLastName = lastName[1];

// var myStr = "Jello World";

// // myStr[0] = "H" // This won't work since strings are immutable. We need to reassign the whole variable.
// myStr = "Hello World";

// var firstName = "Ada";
// var secondLetterOfFirstName = firstName[1];

// var lastName = "Lovelace";
// var thirdLetterOfLastName = lastName[2];

// var lastLetterOfFirstName = firstName[firstName.length - 1];
// var lastLetterOfLastName = lastName[lastName.length - 1];

// var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
// var secondToLastLetterOfLastName = lastName[lastName.length - 2];

// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
//     return result
// }

// console.log(wordBlanks("dog", "big", "ran", "quickly"));
// console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// var ourArray = ["John", 23];
// var myArray = ["Tom", 17, null, 5.33];

// var ourArray = [["the universe", 42], ["everything", 101010]]; // nested array
// var myArray = [["Bulls", 23], [4.5, -2, null]];

// var ourArray = [50,60,70];
// var ourData = ourArray[0];

// var myArray = [50,60,70];
// var myData = myArray[0];
// console.log(myData);

// var ourArray = [18,64,99];
// ourArray[1] = 45; // arrays are NOT immutable. we can change the second item in the array like so.

// var myArray = [18,64,99];
// myArray[2] = 7;

// var arrayOfArrays = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// var myData = arrayOfArrays[3][1];

// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.push(["happy", "joy"]);
// // ourArray is now ["Stimpson, "J", "cat", ["happy", "joy"]]

// var myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3]);

// var ourArray = [1,2,3];
// var removedFromOurArray = ourArray.pop(); // removes and returns the last element in ourArray

// var myArray = [["John", 23], ["cat", 2]];
// var removedFromMyArray = myArray.pop();
// var removedFromMyArray = myArray.shift(); // removes first element from array and assigns it to the variable "removedFromMyArray"
// myArray.unshift("Happy"); // adds "Happy" as first element of array

// var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

// function ourReusableFunction() {
//     console.log("Heyya, World");
// }

// ourReusableFunction();
// ourReusableFunction();
// ourReusableFunction();

// function reusableFunction() {
//     console.log("Hi World!");
// }

// reusableFunction();

// function ourFunctionWithArgs(a, b) {
//     console.log(a - b);
// }
// ourFunctionWithArgs(10, 5);

// function functionWithArgs(a, b) {
//     console.log(a + b);
// }

// functionWithArgs(10, 5);

// var myGlobal = 10;

// function fun1() {
//     oopsGlobal = 5; // no "var" keyword. Since it is within a function, using "var" would make it scoped to just this function. By leaving "var" off, this variable becomes global. Some IDEs will still force "var" keyword, but browser will not.
// }

// function fun2() {
//     var output = "";
//     if (typeof myGlobal != "undefined") {
//         output += "myGlobal: " + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined") {
//         output += " oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }

// fun1();
// fun2();

// function myLocalScope() {
//     var myVar = 5;
//     console.log(myVar); // This will work because myVar is scoped to this function
// }
// myLocalScope();
// console.log(myVar); // This will not work since myVar is scoped to the above function. We are attempting to call it globally here.

// var outerWear = "T-Shirt";

// function myOutfit() {
//     var outerWear = "Sweater";
//     return outerWear;
// }

// console.log(myOutfit()); // will return "Sweater"
// console.log(outerWear); // will return "T-Shirt" since the variable was changed to sweater only within the function

// function minusSeven(num) {
//     return num - 7;
// }

// console.log(minusSeven(10));

// function timesFive(num) {
//     return num * 5;
// }
// console.log(timesFive(5));

// var sum = 0;
// function addThree() {
//     sum = sum + 3;
// }

// function addFive() {
//     sum += 5;
// }

// var changed = 0;

// function change(num) {
//     return (num + 5) / 3;
// }

// changed = change(10);

// var processed = 0;

// function processArg(num) {
//     return (num + 3) / 5;
// }

// processed = processArg(7);
// console.log(processed);

// function nextInLine(arr, item) {
//     arr.push(item);
//     return arr.shift();
// }

// var testArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// function welcomeToBooleans() {
//     return true;
// }

// console.log(welcomeToBooleans());

// function ourTrueOrFalse(isItTrue) {
//     if (isItTrue) {
//         return "Yes, it's true";
//     }
//     return "No, it's false";
// }

// function trueOrFalse(wasThatTrue) {
//     if (wasThatTrue) {
//         return "Yes, that was true";
//     }
//     return "No, that was false";
// }

// console.log(trueOrFalse(true));

// function testEqual(val) {
//     if (val == 12) {
//         return "Equal";
//     }
//     return "Not equal";
// }

// console.log(testEqual(120));

// function testStrict(val) {
//     if (val === 7) {
//         return "Equal";
//     }
//     return "Not equal";
// }

// console.log(testStrict(7.0));

/*
3 === 3   // returns true
3 === '3'   // returns false because string does not get converted to number
3 == 3   // returns true
3 == '3'   // returns true because string gets converted to number
*/

// function compareEquality(a, b) {
//     if (a === b) {
//         return "Equal";
//     }
//     return "Not equal";
// }

// console.log(compareEquality(10, "10"))

// function testNotEqual(val) {
//     if (val != 99) {
//         return "Not equal";
//     }
//     return "Equal";
// }

// console.log(testNotEqual('99'));

// function testStrictNotEqual(val) {
//     if (val !== 17) {
//         return "Not equal";
//     }
//     return "Equal";
// }

// console.log(testStrictNotEqual('17'));

// function testGreaterThan(val) {
//     if (val > 100) {
//         return "Over 100";
//     }
//     if (val > 10) {
//         return "Over 10";
//     }
//     return "10 or under";
// }

// console.log(testGreaterThan('1000'));

// function testGreaterOrEqual(val) {
//     if (val >= 20) {
//         return "Greater or equal to 20";
//     }
//     if (val >= 10) {
//         return "Greater or equal to 10";
//     }
//     return "Less than 10";
// }
// console.log(testGreaterOrEqual(100));

// function testLessThan(val) {
//     if (val < 25) {
//         return "Less than 25";
//     }
//     if (val < 55) {
//         return "Less than 55";
//     }
//     return "55 or greater";
// }
// console.log(testLessThan(65));

// function testLessOrEqual(val) {
//     if (val <=25) {
//         return "Less than/equal to 25";
//     }
//     if (val <= 55) {
//         return "Less than/equal to 55";
//     }
//     return "Greater than 55";
// }
// console.log(testLessOrEqual(75));

// function testLogicalAnd(val) {
//     if (val >= 20) {
//         if (val <= 50) {
//             return "Yes";
//         }
//         return "Partial";
//     }
//     return "No";
// }
// console.log(testLogicalAnd(444));

// function testLogicalAndBetter(val2) {
//     if (val2 >= 20 && val2 <= 50) {
//         return "Yes";
//     }
//     return "No";
// }
// console.log(testLogicalAndBetter(44));

// function testLogical(val) {
//     if (val < 10) {
//         return "Less than 10";
//     }
//     if (val > 20) {
//         return "Greater than 20";
//     }
//     return "Between 10 and 20";
// }
// console.log(testLogicalOr(-33));

// function testLogicalOr(val2) {
//     if (val2 < 10 || val2 > 20) {
//         return "OUTside";
//     }
//     return "INside";
// }
// console.log(testLogicalOr(13));

// function testElseFirst(val) {
//     var result = "";
//     if (val > 5) {
//         result = "Greater than 5";
//     }
//     if (val <= 5) {
//         result = "Less than or equal to 5";
//     }
//     return result
// }
// console.log(testElseFirst(17));

// function testElseSecond(val2) {
//     result = "";
//     if (val2 > 9) {
//         result = "Greater than 9";
//     } else {
//         result = "Less than or equal to 9";
//     }
//     return result;
// }
// console.log(testElseSecond(8));

// function testElif(val) {
//     result = "";
//     if (val > 100) {
//         result = "Greater than 100";
//     } else if (val > 75) {
//         result = "Greater than 75";
//     } else if (val > 50) {
//         result = "Greater than 50";
//     } else {
//         result = "Less than or equal to 50";
//     }
//     return result;
// }
// console.log(testElif(87));

// function orderMyLogic(val) {
//     if (val < 5) {
//         return "Less than 5";
//     } else if (val < 10) {
//         return "Less than 10";
//     } else {
//         return "Greater than or equal to 10";
//     }
// }
// console.log(orderMyLogic(3));

/* Write chained if/else if statements to fulfill the following conditions:
num < 5 : return "Tiny"
num < 10 : return "Small"
num < 15 : return "Medium"
num < 20 : return "Large"
num >= 20 : return "Huge"
*/
// function testSize(num) {
//     if (num < 5) {
//         return "Tiny";
//     } else if (num < 10) {
//         return "Small";
//     } else if (num < 15) {
//         return "Medium";
//     } else if (num < 20) {
//         return "Large";
//     } else {
//         return "Huge";
//     }
// }
// console.log(testSize(21));

/*
Strokes     Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1     "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"
*/
// var names = ["Hole-In-One!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
// function golfScore(par, strokes) {
//     if (strokes <= 0) {
//         return "Error. Strokes cannot be less than 1!";
//     } else if (strokes == 1) {
//         return names[0];
//     } else if (strokes <= (par - 2)) {
//         return (names[1]);
//     } else if (strokes == (par - 1)) {
//         return (names[2]);
//     } else if (strokes == par) {
//         return (names[3]);
//     } else if (strokes == (par + 1)) {
//         return (names[4]);
//     } else if (strokes == (par + 2)) {
//         return (names[5]);
//     } else {
//         return (names[6]);
//     }
// }
// console.log(golfScore(5, 0));

/* Write a switch statement which tests val and sets answer for the following conditions:
1 : "alpha"
2 : "beta"
3 : "gamma"
4 : "delta"
*/
// function caseInSwitch(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         case 4:
//             answer = "delta";
//             break;
//     }

//     return answer;
// }
// console.log(caseInSwitch(4));

// function switchOfStuff(val) {
//     var answer = "";
//     switch (val) {
//         case "a":
//             answer = "apple";
//             break;
//         case "b":
//             answer = "bird";
//             break;
//         case "c":
//             answer = "cat";
//             break;
//         case "d":
//             answer = "dog";
//             break;
//         default:
//             answer = "stuff";
//             break;
//     }
//     return answer;
// }
// console.log(switchOfStuff("dog"));

// function sequentialSizes(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//         case 2:
//         case 3:
//             answer = "Low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = "Mid";
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer = "High";
//             break;
//         default:
//             answer = "Other";
//             break;
//     }
//     return answer;
// }
// console.log(sequentialSizes(81));

// function chainToSwitch(val) {
//     var answer = "";

//     switch(val) {
//         case "bob":
//             answer = "Marley";
//             break;
//         case 42:
//             answer = "The Answer";
//             break;
//         case 1:
//             answer = "There is no #1";
//             break;
//         case 99:
//             answer = "Missed me by this much!";
//             break;
//         case 7:
//             answer = "Ate Nine";
//             break;
//         default:
//             answer = "Default value";
//     }
//     return console.log(answer);
// }
// chainToSwitch(1);

// function isLess(a, b) {
//     return a < b;
// }

// console.log(isLess(10, 1));

// function abTest(a, b) {
//     if (a < 0 || b < 0) {
//         return undefined;
//     }

//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// abTest(2, 2);
// console.log(abTest(2, 2));

// var count = 0;

// function cc(card) {
//     switch(card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             break;

//     }
//     var holdBet = "Hold";
//     if (count > 0) {
//         holdBet = "Bet";
//     }
//     return count + " " + holdBet;
// }

// cc(2); cc("K"); cc(7); cc('K'); cc('A');
// console.log(cc(4));

// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };

// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "tails": 2,
//     "friends": ["the entire world!"]
// }

// var testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
// };

// testObj.hat = "cowboy";
// console.log(testObj);
// var shirtValue = testObj.shirt;
// console.log(shirtValue);

// var testObj = {
//     "an entree" : "Hamburger",
//     "my side" : "Veggies",
//     "the drink" : "water"
// };

// var entreeValue = testObj["an entree"];
// var drinkValue = testObj["the drink"];
// testObj["an entree"]="Pizza"
// console.log(testObj["an entree"])
// console.log(entreeValue, drinkValue)