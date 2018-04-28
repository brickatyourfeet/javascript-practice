//mumbling challenge


function accum(input) {
  let result = ''

  for(let i = 0; i < input.length; i++){
    const currentLetter = input[i]
    const totalCount = i+1
    for(let counter = 0; counter < totalCount; counter++){
      if(counter == 0) result += currentLetter.toUpperCase()
      else result += currentLetter.toLowerCase()
     }
   if(index != input.length - 1) result += '-'
   }  	
  return result
}

//reduce version below

function accum(input) {
  return input.split('').reduce((result, currentLetter, index) => {
    const totalCount = index + 1
    for (let counter = 0; counter < totalCount; counter++) {
      if (counter == 0) {
        result += currentLetter.toUpperCase()
      } else {
        result += currentLetter.toLowerCase()
      }
    }

    if (index != input.length - 1) {
      result += '-'
    }
    return result
  }, '')

}

//one liner: 

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}
