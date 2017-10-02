//higher order functions-
//functions that take a function as an argument or return a function

//map
//map returns an array with the same amount of items - transforms items

[4,5,6].map(functionToPerformOnEachItem)

//filter
//filter returns an array with 0 - n items
// filter takes a conditional  - return true to keep the element

[4,9,6].filter(isOdd)  // returns 9
[4,8,6].filter(isOdd)  // returns []

//reduce
//reduce can reduce any type, it can do lots of shit, 

[0,1,2].reduce(addUp) // 0 + 1 + 2  =   3
[0,1,2].reduce(toSentence) // "0 and 1 and 2"

//find
//find returns one item 

//continue to hof-pt3