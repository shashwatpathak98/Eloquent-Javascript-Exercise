// My Solution

for (let row = 0; row < 7; row++) {
  let toAppend = "";

  for (let column = 0; column <= row; column++) {
    toAppend += "#";
  }

  console.log(toAppend);
}

// Author's Solution

for(let i="#" ; i.length<8 ; i+="#"){
    console.log(i)
} 

