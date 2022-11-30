let square = {
  a1: '', a2: '', a3: '',
  b1: 'x', b2: '', b3: 'x',
  c1: '', c2: 'x', c3: ''
};

let playerTurn = '';
let warning = '';
let playing = false;

document.querySelector('.reset').addEventListener('click', reset);

function reset() {
  warning = '';

  let random = Math.floor(Math.random() * 2);
  playerTurn = (random === 0) ? 'x' : 'o';

  for (let i in square) {
    square[i] = ''
  }

  playing = true;

  renderSquare();
  renderInfo();
}

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