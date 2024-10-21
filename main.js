let all = document.querySelector(".all");
let winner = document.querySelector(".winner");

onload = function(){
    this.scroll({
        top:16,
        behavior:"smooth"
    })
}
let turn = "o";

function game(id) {
  let element = document.getElementById(id);

  if (turn == "o" && element.innerHTML == "") {
    element.innerHTML = "o";
    winner.innerHTML = "x";
    turn = "x";
  } else if (turn == "x" && element.innerHTML == "") {
    element.innerHTML = "x";
    winner.innerHTML = "o";
    turn = "o";
  }
  check();
}

let squares = [];
function check() {
  for (let j = 1; j < 10; j++) {
    squares[j] = document.getElementById("i" + j).innerHTML;
  }

  for (let i = 1; i < 4; i++) {
    if (
      squares[i] == squares[i + 3] &&
      squares[i + 3] == squares[i + 6] &&
      squares[i] != ""
    ) {
      win(i, i + 3, i + 6);
    } else if (
      squares[i] == squares[i + 1] &&
      squares[i + 1] == squares[i + 2] &&
      squares[i] != ""
    ) {
      win(i, i + 1, i + 2);
    } else if (
      squares[i] == squares[i + 4] &&
      squares[i + 4] == squares[i + 8] &&
      squares[i] != "" &&
      i == 1
    ) {
      win(i, i + 4, i + 8);
    } else if (
      squares[i] == squares[i + 2] &&
      squares[i + 2] == squares[i + 4] &&
      squares[i] != "" &&
      i == 3
    ) {
      win(i, i + 2, i + 4);
    }
  }
}

function win(n1, n2, n3) {
  winner.innerHTML = `${squares[n1]} is the winner`;
  document.getElementById("i" + n1).style.background = "blue";
  document.getElementById("i" + n2).style.background = "blue";
  document.getElementById("i" + n3).style.background = "blue";

  let i = 0;
  setInterval(function () {
    if (i < 3) {
      winner.innerHTML += ".";
      i++;
    }
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}
