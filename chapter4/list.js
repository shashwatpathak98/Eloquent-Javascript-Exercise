// My Solution

function arrayToList(arr){

    let obj = null
    for (let index = arr.length-1;  index>=0 ; index--) {
        obj  = { value: arr[index] , rest: obj}
    }

    return obj
}

console.log(arrayToList([10,20]));
console.log(arrayToList([1,2,3]));


function listToArray(obj){
let res = []   
for(let node = obj ; node!=null ; node = node.rest){
    res.push(node.value)
}

return res
}

console.log(listToArray(arrayToList([10,20,30])));

function prepend(a , mylist){
    const newnode = {value: a , rest: mylist}  
    mylist = newnode
    return mylist
}

console.log(prepend(10, prepend(20, null)));

function nth(list , n){
    for(node = list , i = 0   ; node ; node = node.rest , i++){
        if(i === n) return node.value 
    }
}

console.log(nth(arrayToList([10, 20, 30]), 1));


// Author's solution

function arrayToList2(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--)
      list = {value: array[i], rest: list};
    return list;
  }
  
  function listToArray2(list) {
    var array = [];
    for (var node = list; node; node = node.rest)
      array.push(node.value);
    return array;
  }
  
  function prepend2(value, list) {
    return {value: value, rest: list};
  }
  
  function nth2(list, n) {
    if (!list)
      return undefined;
    else if (n == 0)
      return list.value;
    else
      return nth2(list.rest, n - 1);
  }
  
  console.log(arrayToList2([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray2(arrayToList2([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend2(10, prepend2(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth2(arrayToList2([10, 20, 30]), 1));
  // → 20