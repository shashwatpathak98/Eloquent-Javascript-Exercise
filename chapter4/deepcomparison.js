// My Solution

function deepEqual(x, y) {
  const k1 = Object.keys(x);
  const k2 = Object.keys(y);

  if (x === y) {
    return true;
  }

  if (typeof x != "object" || x === null || typeof y != "object" || y === null) {
    return false;
  }

  return k1.every((key) => k2.includes(key) && deepEqual(x[key], y[key]));
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

// Author's Solution

function deepEqual2(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object")
      return false;
    
    var propsInA = 0, propsInB = 0;
  
    for (var prop in a)
      propsInA += 1;
  
    for (var prop in b) {
      propsInB += 1;
      if (!(prop in a) || !deepEqual2(a[prop], b[prop]))
        return false;
    }
  
    return propsInA == propsInB;
  }
  
  var obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual2(obj, obj));
  // → true
  console.log(deepEqual2(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual2(obj, {here: {is: "an"}, object: 2}));
  // → true