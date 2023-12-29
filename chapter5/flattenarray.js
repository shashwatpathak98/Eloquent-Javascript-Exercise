//My Answer

const myArr = [[1,2,3] , [4,5] , [6]]

console.log(myArr.reduce((acc , curr) => [].concat(acc,curr)));
// [ 1, 2, 3, 4, 5, 6 ]


// Author's Answer


let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]

