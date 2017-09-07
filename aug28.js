

sayHello() //valid - this is fine to do, it is a function
function sayHello() {
    console.log('hello');
}

sayHello2() //undefined()  --this won't work, function hasn't been defined yet
var sayHello2 = function() {
    console.log('hello 2');
}



//functions returning functions

function doNothing(){
    
}

doNothing(); //existential function - why am i here?


function add(x,y){
    var result = x + y;
    //js returns undefined if you don't return anything
    return result;
}

add(2, 4);

//side effects in programming - intentionally use functions for the side effects

var result = 0;
function addViaSideEffects(x,y) {
    result = x + y;
}

addViaSideEffects(2, 5);
console.log(result);
addViaSideEffects(4,15);
console.log(result);

//side effect is anything happening outside of the function  . . .?
//anything that happens outside of javascript may need a side effect
//anything that happens within should avoid it

//a function with return - 
//a function with side effects works outside of the function 


/////args vs params
//inside the function theyre parameters
//outside they are arguments
//args map to param is one way to think about it



//just saving before push on unit happens to fix mean mode shit
function intenseString(str) {
  // your code here
  if(!str.endsWith('!!!') || !str.){
      return false;
  }
}
//fixed version of same deal
function intenseString(str) {
  // your code here
  if(!str.endsWith('!!!') || !str.includes('!')){
      return false;
  } else if(str.endsWith('!!!') && !str.split('!')[0].includes('!')) {
      return true;
  }else {
      return false;
  }
}


//i think the same thing
  if(!str.endsWith('!!!') || str.split('!')[0].includes('!')){
      return false;
  } else if(str.endsWith('!!!') && !str.split('!')[0].includes('!')) {
      return true;
  }else {
      return false;
  }
}
