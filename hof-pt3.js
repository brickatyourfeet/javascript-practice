console.log('sanity check')

var bugs = [
    'beetle',
    'worm',
    'spider',
    'mantis'
]

//for(let i = 0; i < bugs.length; i++){
//    console.log(bugs[i])
//}


//function forEach(array, callback){
//    for(let i = 0; i < array.length; i++){
//        callback(array[i])
//    }
//}

var result = bugs.filter(function (bug){
    return bug !== 'spider'
})

var result2 = bugs.filter(bug =>{
    return bug === 'spider'
})

function returnMantis(bug){
    return bug === 'mantis'
}

var result3 = bugs.filter(returnMantis)

//console.log(result)
//console.log(result2)
//console.log(result3)


function list(bug, index, array){
    console.log(bug, index, array)
}

bugs.forEach(list)


