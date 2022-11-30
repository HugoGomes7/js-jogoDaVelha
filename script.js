let square = {
  a1: '', a2: '', a3: '',
  b1: '', b2: '', b3: '',
  c1: '', c2: '', c3: ''
};

let playerTurn = '';
let warning = '';
let playing = false;

function renderSquare() {
  for (let i in square) {
    let item = document.querySelector(`div[data-item=${i}]`);
    item.innerHTML = square[i];
  }
}

function renderInfo() {
  document.querySelector('.turn').innerHTML = playerTurn;
  document.querySelector('.result').innerHTML = warning;
}