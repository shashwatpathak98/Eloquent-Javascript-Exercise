// My Solution

function range(a,b,c=1){
   
    let finalAnswer =  []
    if(a<b){
        let finans = []
        for(let i = a ; i<=b ; i=i+c){
            finans.push(i)
            finalAnswer = finans
        }
    }

    if(b<a){
        let finans2 = []
        for(let i = a ; i>=b ; i=i+c){
            finans2.push(i)
            finalAnswer = finans2
        }
    }

    return finalAnswer
}

function sum(ans){
    let sum = 0 

    for(let elem in ans){
        sum = sum + ans[elem]
    }

    return sum
}


console.log(range(1,10));
console.log(range(5,2,-1));
console.log(sum(range(1,10)));
console.log(sum(range(5,2,-1)));

// Author's solution

function range2(start, end, step) {
    if (step == null) step = 1;
    var array = [];
  
    if (step > 0) {
      for (var i = start; i <= end; i += step)
        array.push(i);
    } else {
      for (var i = start; i >= end; i += step)
        array.push(i);
    }
    return array;
  }
  
  function sum2(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
      total += array[i];
    return total;
  }
  
  console.log(range2(1, 10))
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range2(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum2(range2(1, 10)));
  // → 55