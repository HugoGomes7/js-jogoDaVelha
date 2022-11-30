let square = {
  a1: 'o', a2: 'o', a3: 'o',
  b1: '', b2: '', b3: '',
  c1: '', c2: '', c3: ''
};

let playerTurn = '';
let warning = '';
let playing = false;

reset();

document.querySelector('.reset').addEventListener('click', reset);

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

function reset() {
  warning = '';

  let random = Math.floor(Math.random() * 2);
  playerTurn = (random === 0) ? 'x' : 'o';

  // for (let i in square) {
  //   square[i] = ''
  // }

  playing = true;

  renderSquare();
  renderInfo();
}