let square = {
  a1: '', a2: '', a3: '',
  b1: '', b2: '', b3: '',
  c1: '', c2: '', c3: ''
};

let playerTurn = '';
let warning = '';
let playing = false;

reset();

document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', itemClick);
});

function itemClick(event) {
  let item = event.target.getAttribute('data-item');
  if (playing && square[item] === '') {
    square[item] = playerTurn;
    renderSquare();
    togglePlayer();
  }
}

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

  checkGame();
}

function renderInfo() {
  document.querySelector('.turn').innerHTML = playerTurn;
  document.querySelector('.result').innerHTML = warning;
}

function togglePlayer() {
  playerTurn = (playerTurn === 'x') ? 'o' : 'x';
  renderInfo();
}

function checkWinnerFor(playerTurn) {
  let possibilites = [
    'a1,a2,a3',
    'b1,b2,b3',
    'c1,c2,c3',

    'a1,b1,c1',
    'a2,b2,c2',
    'a3,b3,c3',

    'a1,b2,c3',
    'a3,b2,c1'
  ];

  for (let win in possibilites) {
    let pArray = possibilites[win].split(',');
    let hasWon = pArray.every(option => square[option] === playerTurn);
    if (hasWon) {
      return true;
    }
  }

  return false;
}

function isFull() {
  for (let i in square) {
    if (square[i] === '') {
      return false;
    }
  }
  return true;
}

function checkGame() {
  if (checkWinnerFor('x')) {
    warning = 'Player X won!';
    playing = false;
  } else if (checkWinnerFor('o')) {
    warning = 'Player o won!';
    playing = false;
  } else if (isFull()) {
    warning = 'Draw!';
    playing = false;
  }
}



