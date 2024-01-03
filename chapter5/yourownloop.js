// My Solution

const loop = (val, condition, update, print) => {
  for (let i = val; condition(i); i = update(i)) print(i);
};

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

// Author's Solution

function loop1(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop1(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1
