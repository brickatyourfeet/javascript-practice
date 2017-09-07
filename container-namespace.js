var greet = 'Hello!';
var greet = 'Hola!'; 

//the above will create an issue-hola will be the one used, hello is overwritten
//we can instead put each into an object container, such as english and spanish-
// and those objects can have objects inside of them and so on

console.log(greet);

var english = { 
    greetings: { 
        basic: 'Hello!' 
    } 
};

var spanish = {};

spanish.greet = 'Hola!';

console.log(english);