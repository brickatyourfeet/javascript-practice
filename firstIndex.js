//write a function that takes a string 'n' and a single character 'm' and returns the first index of that character  --if function does not appear it should return -1

function firstIndex(n,m){
  let result = -1;
  
  for(let i = 0; i < n.length; i++){
    if(n[i] === m){
      
      return i;
      
    }
  }
  return result;
}

firstIndex('soccer', 'c')
