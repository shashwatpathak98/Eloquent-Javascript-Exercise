//My Solution

//Using a loop
const every = (array, test) => {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) return false;
  }
  return true;
};

console.log(every([1, 3, 5], (n) => n < 10));
console.log(every([2, 4, 16], (n) => n < 10));
console.log(every([], (n) => n < 10));

//Using some method

const everyNew = (array, test) => !array.some((e) => !test(e));
console.log(everyNew([1, 3, 5], (n) => n < 10));
console.log(everyNew([2, 4, 16], (n) => n < 10));
console.log(everyNew([], (n) => n < 10));

// Author's Solution

function every1(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some((element) => !predicate(element));
}

console.log(every1([1, 3, 5], (n) => n < 10));
// → true
console.log(every1([2, 4, 16], (n) => n < 10));
// → false
console.log(every1([], (n) => n < 10));
// → true
console.log(every2([1, 3, 5], (n) => n < 10));
// → true
console.log(every2([2, 4, 16], (n) => n < 10));
// → false
console.log(every2([], (n) => n < 10));
// → true
