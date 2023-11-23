// My Solution

function reverseArray(arr){
    let ans = []
    for(let i = arr.length-1 ; i >= 0 ; i -= 1){
            ans.push(arr[i])
    }
    return ans

}


console.log(reverseArray(["A","B","C"]));




function reverseArrayInPlace(myArr){

   let first = 0
   let last =  myArr.length-1

    while(first < last){
        // let temp = myArr[first]
        // myArr[first] = myArr[last]
        // myArr[last] = temp
        [myArr[first++], myArr[last--]] = [myArr[last] , myArr[first]]
        // first++
        // last--

    }

    return myArr

}

console.log(reverseArrayInPlace([1,2,3,4,5]));

// Author's Solution

function reverseArray2(array) {
    var output = [];
    for (var i = array.length - 1; i >= 0; i--)
      output.push(array[i]);
    return output;
  }
  
  function reverseArrayInPlace2(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
      var old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }
  
  console.log(reverseArray2(["A", "B", "C"]));
  // → ["C", "B", "A"];
  var arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace2(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]