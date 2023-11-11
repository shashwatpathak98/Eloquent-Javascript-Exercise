// My Solution

let ans = "# # # #"

for(let i = 0 ; i< 8; i++){
  
    if(i%2 == 0){
       console.log(" " + ans);
    }
    else{
       console.log(ans)
    }

}

// Author's solution

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);