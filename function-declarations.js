greet();
//function statement
function greet() {
    console.log('hi');   
}
//function expression
var anonymousGreet = function() {
    console.log('hi');   
}

anonymousGreet();
//function that passes another function
function log(a) {
   a();    
}

log(function() {
    console.log('hi');   
});