// My Solution
const minimum = (num1, num2) => {
  return num1 > num2 ? num2 : num1;
};

console.log(minimum(0, 10));
// → 0
console.log(minimum(0, -10));
// → -10


// Author's Solution

function min(a, b) {
    if (a < b)
      return a;
    else
      return b;
  }
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10
