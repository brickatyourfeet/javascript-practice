function evenOddPartition(arr){
    var partition = {};
    partition.even = [];
    partition.odd = [];
    for (var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            partition.even.push(arr[i]);
        }else{
            partition.odd.push(arr[i]);
        }
    }
    partition.even.sort();
    partition.odd.sort();
    return partition;
}

evenOddPartition([1,10, 2, 4, 3, 70]);

console.log(evenOddPartition([1,10, 2, 4, 3, 70]));


/**

let a =[13, 100, 71, 2, 8670, 200, 5]
let b =[1,0]
let c =[-2,-13987653, -25, -40]

function evenOdd(array){
  let output = {}
  let odd =[]
  let even = []
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
      even.push(array[i])
    } else {
      odd.push(array[i])
    }
  }
  output['evens'] = even
  output['odds'] = odd
  return output
}

function reduceEvenOdd(arr){
  let output = arr.reduce(function(collection,item){
    if (item % 2 === 0){
      collection.even.push(item)
    } else {
      collection.odd.push(item)
    }
    return collection
  }, {even:[], odd:[]})
  return output
}

function redEvenOdd(arr){
  let output = arr.reduce(function(collection, item){
    item % 2 === 0 ? collection.even.push(item) : collection.odd.push(item)
    return collection
  }, {even:[], odd: []})
    return output
}

**/