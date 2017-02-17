var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay")
var display = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

init();

function init(){
  setupModes();
  setupSquares();
  reset();
}

function setupModes(){
  for(var i = 0;i < mode.length; i++){
    mode[i].addEventListener("click", function(){
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  };
};

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.background;
      //compare clickedColor to the pickedColor
      if(clickedColor === pickedColor){
        display.textContent = "Correct!";
        // changes colors of all squares
        changeColors(clickedColor);
        document.querySelector("h1").style.background = clickedColor;
        resetBtn.textContent = "Play Again?";
      } else {
        this.style.background = "#232323";
        display.textContent = "Try again!";
      }
    });
  }
}

function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
  display.textContent = "";
  document.querySelector("h1").style.background = "steelblue";
  resetBtn.textContent = "New Colors";
}

resetBtn.addEventListener("click", reset);

function changeColors(color){
  //loop through the squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  // generates a random number from 0 to colors.length (pool of colors)
  var random = Math.floor(Math.random() * colors.length);
  // returns a random color
  return colors[random];
}

function generateRandomColors(num){
  //make an arr
  var arr = [];
  //add num random colors array
  for(var i = 0; i < num; i++){
    arr.push(randomColor())
  }
  //return an arr
  return arr;
}

function randomColor(){
  // red
  var r = Math.floor(Math.random() * 256);
  // green
  var g = Math.floor(Math.random() * 256);
  // blue
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")"
}


// easy.addEventListener("click", function(){
//   this.classList.add("selected");
//   hard.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]){
//     squares[i].style.background = colors[i];
//     } else {
//     squares[i].style.display = "none";
//     }
//   }
//   display.textContent = "";
//   document.querySelector("h1").style.background = "steelblue";
//   reset.textContent = "New Colors";
// });
//
// hard.addEventListener("click", function(){
//   this.classList.add("selected");
//   easy.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     squares[i].style.background = colors[i];
//     squares[i].style.display = "block";
//
//   }
//   display.textContent = "";
//   document.querySelector("h1").style.background = "#steelblue";
//   reset.textContent = "New Colors";
// });
