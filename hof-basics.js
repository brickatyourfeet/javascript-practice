//HIGHER ORDER FUNCTIONS BASICS

var arr = [1, 2, 3, 4];

arr.forEach(function(element) {
  console.log(element);
});

//note- this prints to the console - the function is invoked


//below is an example of map- which creates a new array same size as original array, applies a function to each item in the array - and pushes the return value of the function into that new array   --example does square roots of an array

var arr = [1, 2, 3, 4];

var squares = arr.map(function(element) {
  return element * element;
});

console.log(squares); // [1, 4, 9, 16]


//multiplying each item in an array by ten
let numbers = [1, 2, 3, 4, 5]
let numbersTimesTen = numbers.map(function(element){
    return element * 10;
});

//which is better than doing it this way : 
//
//var arr = [1, 2, 3, 4];
//
//var squares = [];
//
//for (var element of arr) {
//  squares.push(element * element);
//}
//
//console.log(squares); // [1, 4, 9, 16]


//using filter method to return only the odd numbers on an array
var arr = [1, 2, 3, 4];

var odds = arr.filter(function(element) {
  return element % 2 !== 0;
});

console.log(odds); // [1, 3]

//which is better than doing it this way: 
//var arr = [1, 2, 3, 4];
//
//var odds = [];
//
//for (var element of arr) {
//  if (num % 2 !== 0) {
//    odds.push(element);
//  }
//}
//
//console.log(odds); // [1, 3]

//below is using filter to return numbers greater than 50
let numbers3 = [1, 2, 3, 4, 5, 10, 70, 80, 90, 100]
let numbersGreaterThan50 = numbers3.filter(function(element){
    return element > 50;
});


//below is using the reduce method to add an array of numbers to eachother 
let numbers2 = [1, 2, 2, 10]
let sum = numbers2.reduce(function(result, element){
    console.log(result + element);
    return result + element;
}, 0);


//this is the forEach method
function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }

  return arr;
}

forEach(['one', 'two', 'three'], function (val, index, arr) {
  console.log(val, index, arr);
});






