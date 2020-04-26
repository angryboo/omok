const $goData = document.querySelector('.go-data');

// status
let turn = 'black';


// turn change
const changeTurn = () => {
  turn = turn === 'black' ? 'white' : 'black';
  console.log(turn);
};


// click event
$goData.addEventListener('click', ({ target }) => {
  if (!target.matches('.go-data > div')) return;
  console.log('click event', target);
  changeTurn();
});
