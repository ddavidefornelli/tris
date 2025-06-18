
function Player(name, points) {
  if (!new.target) {
    throw Error ("affammocccc")
  }
  this.name = name
  this.points = points
}

const container = document.querySelector(".container")


let player1 = new Player('a', 0)
let player2 = new Player('b', 0)


function CheckWinner(grid){
  if(checkRows(grid) === "player1" || checkCols(grid) === "player1" || checkDiags(grid) === "player1"){
    return "player1"
  } else if(checkRows(grid) === "player2" || checkCols(grid) === "player2" || checkDiags(grid) === "player2"){
    return "player2"
  }
}

function checkRows(grid){
  for(let i = 0; i < 3; i++){
    let row = [grid[i][0], grid[i][1], grid[i][2]]
    if(row.every(cell => cell === "X") ){
      return "player1";
    }
    else if(row.every(cell => cell === "O")){
      return "player2"
    }
  }
  return false;
}

function checkCols(grid){
  for(let i = 0; i < 3; i++){
    let col = [grid[0][i], grid[1][i], grid[2][i]]
    if(col.every(cell => cell === "X") ){
      return "player1";
    }
    else if(col.every(cell => cell === "O")){
      return "player2";
    }

  }
  return false;
}

function checkDiags(grid){
  let dx = [grid[0][0], grid[1][1], grid[2][2]]
  let sx = [grid[0][2], grid[1][1], grid[2][0]]
  if(sx.every(cell => cell === "X") || dx.every(cell => cell === "X")){
    return "player1"
  }
  if(dx.every(cell => cell === "O") || sx.every(cell => cell === "O")){
    return "player2"
  }
  return false
}


const scoreBoard = document.getElementById("scoreBoard")
scoreBoard.textContent = player1.points + "  -  " + player2.points

function play(count){

let grid = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
let gameover = false
if(count % 2 === 0){
   currentplayer = "x"
} else {
   currentplayer = "o"
}
for(let i = 0; i < 3; i++){
  for(let j = 0; j < 3; j++){
    const cell = document.createelement("div")
      cell.classname = "cell"
      cell.addeventlistener("click", () => {
        if(gameover) return;
        if(cell.textcontent === ""){
          cell.textcontent = currentplayer
          grid[i][j] = currentplayer
        }
        if(currentplayer === "x"){
          currentplayer = "o"
        } else if (currentplayer === "o"){
          currentplayer = "x"
        }
        if(checkwinner(grid) === "player1"){
          player1.points++
          gameover = true
          scoreboard.textcontent = player1.points + " - " + player2.points
        }
        else if(checkwinner(grid) === "player2"){
          player2.points++
          gameover = true
          scoreboard.textcontent = player1.points + " - " + player2.points
        }
      })
      container.appendchild(cell)
    }
  }
}


play(0)

const button = document.createElement("button")
button.className = "playAgain"
button.textContent = "Play Again"
let count = 1;
button.addEventListener("click", () => {
  container.innerHTML = ""
  play(count)
  count++
})
container.after(button)




const dropdownButton = document.getElementById("dropdown")

dropdownButton.addEventListener("click", () => {
  if(document.querySelector(".dropdown-ul").style.visibility === 'visible'){
  document.querySelector(".dropdown-ul").style.visibility = 'hidden'
  } else {
  document.querySelector(".dropdown-ul").style.visibility = 'visible'
  }
})





