// My Solution

let isEven = (num) => {
  //base condition

  if (num < 0 ){
    num = num * (-1)
  }
  if (num === 0) return true;
  else if (num === 1) return false;
  
  return isEven(num - 2);
};
let n = -8;
console.log(isEven(n));


// Author's solution

function isEven2(n) {
    if (n == 0)
      return true;
    else if (n == 1)
      return false;
    else if (n < 0)
      return isEven2(-n);
    else
      return isEven2(n - 2);
  }
  
  
  console.log(isEven2(50));
  // → true
  console.log(isEven2(75));
  // → false
  console.log(isEven2(-1));
  // → false