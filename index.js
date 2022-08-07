let screen = document.getElementById("show")
let screen2 = document.getElementById("show2")
let board1 = document.getElementById("board1")
let board2 = document.getElementById("board2")
// console.log(screen) 
let count =0
let count2 =0
function increment(){
  // console.log("button clicked")
    count += 1
    screen.innerText = count
}
function increment2(){
  // console.log("button clicked")
    count += 2
    screen.innerText = count
}
function increment3(){
  // console.log("button clicked")
    count += 3
    screen.innerText = count
}

function increment11(){
  // console.log("button clicked")
    count2 += 1
    screen2.innerText = count2
}
function increment12(){
  // console.log("button clicked")
    count2 += 2
    screen2.innerText = count2
}
function increment13(){
  // console.log("button clicked")
    count2 += 3
    screen2.innerText = count2
}
function reseth(){
    count = 0
    screen.innerText = count
    board1.innerText = "Score is :-0"
}
function saveh(){
     board1.innerText = board1.innerText + "-"+ count
}
function resetg(){
  count2 = 0
  screen2.innerText = count2
  board2.innerText = "Score is :-0"
}
function saveg(){
   board2.innerText = board2.innerText + "-"+ count2
}