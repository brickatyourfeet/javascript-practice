{
    x: 4,
    y: 10,
    z: 20
}

function objJoin(obj) {
    let result = 0;
    for((let key in obj) {
        result += obj[key];
    }
        return result;
}
        
        
        
        
/**

//wrong way to do it, should use for in loop

function loopingData3() {
  var arr = [];
  for(var i = 0; i < Object.keys(store1).length; i++){
    arr[i] = "?";
  }
  return arr;
}

**/
        
 /**    
 //another wrong way to do it - use for in loop
 
        function loopingData4() {
  //keep in mind that store1 is an object, not an array.
  var total = 0;
  for(var i = 0; i < Object.keys(store1).length; i++){
    total += store1["2015-01-06","2015-01-07","2015-01-08","2015-01-09","2015-01-10"][0][2];
  }
  return total;
}
**/

        /////////Correct way
        
loopingData4()
// Use a loop to calculate the total number of candies sold at store1.
function loopingData4() {
  var accum = 0;
  //for each date input (key)
  for (salesDate in store1) {
    //for each item in each salesDate (key)
    for (var i = 0; i < store1[salesDate].length; i++) {
      //assign them somewhere - or return this deep accumulating var
      accum += store1[salesDate][i][2];
      //var sale = store1[salesDate][i]
      //console.log('sale', sale)
    //  console.log('sale number', sale[2])
    }
  }
  return accum;

}        
        
        
/**
//wrong again

  var transactions = [];
  var dates = Object.keys(store1);
  var num = 0;
  for(var i = 0; i < dates.length; i++){
    transactions.push(dates[i]);
}
  //for(var i = 0; i < transactions.length; i++){
    //num += 1;
  //}
return transactions.length;
}
**/