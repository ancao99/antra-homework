// Strings
const str = "Hello World";

// split: split string into substring by the seperator
const splitLetter = str.split("");
console.log(splitLetter); // ["H","e",....] the seperator: ""
const splitWord = str.split(" ");
console.log(splitWord); // ["Hello","World"] the seperator: " "

//toUpperCase: convert all characters to uppercase
console.log(str.toUpperCase()); //HELLO WORLD
console.log("asd".toUpperCase()); //ASD

//toLowerCase: convert all characters to lower case
console.log(str.toLowerCase()); //hello world
console.log("ASD".toLowerCase()); //asd

// useful ones:
// include:
console.log(str.includes("World")); // true
console.log(str.includes("Goodbye")); // false
console.log(str.includes(2)); // false

//charAt: return the character at specific index
console.log(str.charAt(0)); // "H"
console.log(str.charAt(123));
console.log(str.charAt(-4));

//slice: return a section of a string
console.log(str.slice(6)); // "World"
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(-1, 5)); //nothing happen
console.log(str.slice(1, 1235)); //"ello World"

//replace: replace a "World" with "JS"
console.log(str.replace("World", "JS")); // "Hello JS"
console.log(str.replace("a", "JS")); // "Hello World"

//substring: return the character in a string between start and end
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substring(-1, 10)); // "Hello World"
console.log(str.substring(-1)); // "Hello World"

//trim: remove white space from both end
const stringWithSpaces = "   Hello World   ";
console.log(stringWithSpaces.trim()); // "Hello World"
