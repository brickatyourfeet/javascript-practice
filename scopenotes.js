// Scope.js

let fileScope = "Can be accessed anywhere in the file";

function doSomething() {  
    let localScope = "Can only be accessed inside this function";
    fileScope = "Can be accessed in the function too!";
}

// This will result in an error because the variable does not exist
// outside the function.
localScope = "Try and change me here";  



//an example mocking up two files to show that other files can grab shit that has been declared global
// Global.js

global.globalString = "This can be accessed anywhere!";  
console.log(globalString); // Output: "This can be accessed anywhere!"

globalString = "Check me out now";  
console.log(globalString); // Output: "Check me out now"

globalString = undefined;  
console.log(globalString); // Output: undefined  
// Example.js

// We can use the global we created in Global.js in this file 
// as well.
console.log(globalString); // Output: undefined

globalString = “We can change it too!";  
console.log(globalString); // Output: "We can change it too!"  



/**

var planetName = 'Pluto';

function matt() {
  
  console.log(planetName);
  
  if(planetName === 'Pluton') {
    let msg = 'It ain\'t no planet';
  }else{
    let msg = 'Pluto\'s a fucking planet, bitch!';
  }
  
  return msg;
}

var msg = matt();

console.log(msg);

*/
