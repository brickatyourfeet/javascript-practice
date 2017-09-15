function b(){
    console.log(myVar);
}

function a(){
    var myVar = 2;
    b();
}

var myVar = 1;
a();


//what will this print?
//1 
//it prints 1 because myVar is declared 1 in global