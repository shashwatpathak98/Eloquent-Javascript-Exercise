// My Solution

let map = { one: true, two: true, hasOwnProperty: true };
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true

//Author's Solution

let map2 = { one: true, two: true, hasOwnProperty: true };
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
