
//es5
var add = function(a,b){
    return a+b
}

//es6
const add = (a,b) => a+b


var greet = (name) => {
    return `Hello ${name}!`
}

var greet = (name) => `Hello ${name}!`

var greet = name => `Hello ${name}!`



//es5
[1,2,3].map(function(element, index, colelction){
    return element + !
})

//es6  ---- nice.
[1,2,3].map(el => el + 1)
    
//arrow functions are expressions, they do not have hoisting, so if its named, and you want to reuse it, it has to be below the function
    
const sub = (a,b) => a-b





function person(name, age, hobbies=[]){
    return {name:name, age:age, howManyHobbies: hobbies.length}
}

//with defaults
    

function person2(
    name ='Default name', 
    age = 0, 
    hobbies=['athing', 'another thing']){
    return {name:name, age:age, howManyHobbies: hobbies.length}
}

//es5
var name = 'Kyle'
var learning = "javascript"
var obj = {name: name, learning: learning}
    
//es6  - same thing
var obj2 = {name, learning}
    



var dog = {name: 'Clover', age:4}
//es5
var name = dog.name
var age = dog.age

//es6  - same thing
var {name, age} = dog
//name and age are the keys that are inside of dog
//bonkers



function isEven (number) {
  return number % 2 === 0
}

const isEven = number => number % 2 === 0

//the curly braces apply implicit return
//so curly braces only work if you add a return
// '' is falsey - [] is true
//thats why we check array.length because if it equals 0, its falsey

//function isEven = number => number % 2 === 0

//const isEven = (number) => { number % 2 === 0 }

//const isEven = number => { number % 2 === 0 }
