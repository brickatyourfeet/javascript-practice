function b(){
    var myVar;
    console.log(myVar);
}

function a(){
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

//////////this will print 1 - 2 - undefined - 1
//because-
// its declared as 1 globally - 
//it then hops into a - where it is declared as 2 and prints 2
// it then hops into b where it is declared undefined
// it then goes back out to the global execution where it is still 1 and prints 1



