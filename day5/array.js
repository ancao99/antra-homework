// Array
const arr = [1, 2, 3, 4, "a", 5, { 1: 3 }];

//forEach: show the list of element in array
arr.forEach((element) => {
  console.log(element);
});

//filter
const number = arr.filter((element) => typeof element === "number");
console.log(number);

//map
const mapNumber = arr.map((element) => element * 2);
console.log(mapNumber); //a,object -> NaN because a is a string not a number

//find
const findNumber = arr.find((element) => element < 3);
console.log(findNumber); //print out the first element found

//includes
console.log(arr.includes("a")); //true
console.log(arr.includes({ 1: 3 })); //false, because references data type
console.log(arr.includes("1")); //false
console.log(arr.includes(2)); //true

//join
const joinArr = arr.join(", ");
console.log(joinArr);

//pop
let arr1 = [...arr]; //copy from the original one so not mess up
console.log(arr1.pop());
console.log(arr1);

//push
arr1 = [...arr];
arr1.push({ 1: 4 }); //return the number of element in arr
console.log(arr1);

//reduce: need more research
const sum = number.reduce((acc, num) => acc - num);
console.log(sum);

//sort
arr1 = [...arr];
console.log(arr1.sort()); // number, object, string

// slice
const slideNumber = arr.slice(2, 5);
const slideNumber1 = arr.slice(5); // from 5 - > end
console.log(slideNumber1);

//reverse
arr1 = [...arr];
const reverse = arr1.reverse();
console.log(reverse);

// some: test whereare at least one element is pass the test
console.log(arr.some((element) => element == 4)); //true
console.log(arr.some((element) => element == { 1: 3 })); //false, reference data type
console.log(arr.some((element) => element == "v")); //false

// every: test all element in arr pass the test
console.log(arr.every((element) => typeof element == 'number')); //false
let arr2 = [1,2,3];
console.log(arr2.every((element) => typeof element =='number'));// true

//findIndex: return the first element that pass the text
console.log(arr.findIndex((element) => element == 4)); //4 is index 3
console.log(arr.findIndex((element) => element == "v")); //-1 if not find

// static:
// isInteger:check value is interger
console.log(Number.isInteger(5)); //true
console.log(Number.isInteger("a")); //false
console.log(Number.isInteger({ 1: 3 })); //false

//isNaN: check the value is NaN
console.log(Number.isNaN(NaN));   //true
console.log(Number.isNaN("string")); //otherwise is false

//parseInt: parses a string and return a number
console.log(Number.parseInt("3")); //3
console.log(Number.parseInt(3.12)); //3
console.log(Number.parseInt("3.12")); //3
console.log(Number.parseInt(0xff)); //255
console.log(Number.parseInt("qwe")); //NaN
console.log(Number.parseInt({ 1: 4 })); //NaN

//parseFloat: parses a string and return a float
console.log(Number.parseFloat("3")); //3
console.log(Number.parseFloat(3)); //3
console.log(Number.parseFloat(3.12)); //3.12
console.log(Number.parseFloat("3.12")); //3.12
console.log(Number.parseFloat({ 1: 4 })); //NaN
console.log(Number.parseFloat("qwe")); //NaN