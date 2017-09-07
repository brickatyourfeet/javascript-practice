//objects should use for in loop because vanilla for loops don't work

let obj = {
  name: 'bob',
  age: 40,
  occupation: 'burgers',
  kids: ['gene', 'louise', 'tina']
}

for (let prop in obj) {
  console.log(prop);
}
//prop won't exist after the loop is done because we used let

for(let prop in obj){
  console.log(obj[prop]);
}
//how to print the keys ^

/**
the dot notation is the syntactical sugar
everything with a dot can be written with a bracket,
but not necessarily the other way around
obj.name
obj['name']
**/
console.log(obj['kids'][0]);

//to use higher order functions on objects - traditionally can only with arrays
Object.keys(obj).forEach(function(prop){
  console.log(prop)
});

//----other notes

function getPropertyFromUser(){
  return 'age'
}

var userProp = getPropertyFromUser()

//NOT THE SAME
obj[userProp]
obj['userProp']

//ARE THE SAME
obj[userProp]
obj['age']

//what does it take for the top line to get to dot notation
obj['na' + 'me']
obj['name']
obj.name

//you can't do dot notation with variables
//variables with properties you need to use bracket notation