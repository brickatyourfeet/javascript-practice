
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce(function(num1, num2){
      return num1 < num2 ? num1 : num2
    })
  }
}

//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
