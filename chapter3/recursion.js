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
