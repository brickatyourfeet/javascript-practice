var oneSecond = 1000;
var countTo = 10;

var countDown = setInterval(function() {
  console.log(countTo-- + "...");
}, oneSecond);

setTimeout(function() {
  clearInterval(countDown);
  console.log("Ready or not, here I come!");
}, countTo * oneSecond);



function cbFunction(x, y, z) {
  return x + y + z
}

function caller(x, y, z, cbFunction) {
  console.log('In caller function!')
  // your code here
  return cbFunction(1,2,3);
}

let x = caller(1, 2, 3, cbFunction)