//My Solution

const countB = (name) => {

    return countChar(name , "B")
}



const countChar = (name , mychar) => {

    let count = 0
    for(let i = 0 ; i < name.length ; i++){
        if(name[i] === mychar){
           count++
        }
    }

    return count
}

const finalans1 = countB("ABBBBBC")
const finalans2 = countChar("kakkerlak", "k")
console.log(finalans1)
console.log(finalans2)



// Author's Solution

function countChar1(string, ch) {
    var counted = 0;
    for (var i = 0; i < string.length; i++)
      if (string.charAt(i) == ch)
        counted += 1;
    return counted;
  }
  
  function countBs1(string) {
    return countChar1(string, "B");
  }
  
  console.log(countBs1("BBC"));
  // → 2
  console.log(countChar1("kakkerlak", "k"));
  // → 4