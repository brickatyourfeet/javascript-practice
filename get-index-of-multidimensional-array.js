/**
 * Index of Multidimensional Array
 * @param arr {!Array} - the input array
 * @param k {object} - the value to search
 * @return {Array} 
 */
function getIndexOfK(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i].indexOf(k);
    if (index > -1) {
      return [i, index];
    }
  }
}

// Generate Sample Data
var k = 0;
var array = [];
for (var i = 0; i < 10; i++) {
  array[i] = [];
  for (var j = 0; j < 100; j++) {
    k = k + 1;
    array[i].push(k);
  }
}
var needle = 130;
var result = getIndexOfK(array, needle);
console.log('The value #' + needle + ' is located at array[' + result[0] + '][' + result[1] + '].');