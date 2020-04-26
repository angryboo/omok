const $goData = document.querySelector('.go-data');
const $goItem = document.querySelectorAll('.go-item');

// status
let turn = 'black';
let omok = [];


const setStone = () => {
  omok.forEach(({ player }, i) => {
    $goItem[i].firstElementChild.classList.add(`${player}`);
  });
};


const getData = async () => {
  try {
    // eslint-disable-next-line no-undef
    const { data } = await axios.get('/omok');
    omok = data;
  } catch (e) {
    console.error(e);
  }
};
window.onload = getData();


// turn change
const changeTurn = () => {
  turn = turn === 'black' ? 'white' : 'black';
  // console.log(turn);
};


const setData = async select => {
  const { data } = await axios.patch(`/omok/${select[0]}/${select[1]}`);
};


// const setStone = id => {
//   $goItem.forEach(item => {
//     if (item.id === id) {
//       item.firstElementChild.classList.add(`${turn}`);
//     }
//   });
// };


const getAxis = target => {
  console.log(target, omok);
  const select = target.id.match(/[0-9]+/g).map(axis => +axis);
  return select;
};


// click event
$goData.addEventListener('click', ({ target }) => {
  if (!target.matches('.go-data > div')) return;

  const select = getAxis(target);
  console.log('[select-axis]', select);

  let isPossible = false;
  omok.forEach(({ yaxis, xaxis, did }) => {
    if (+yaxis === select[0] && +xaxis === select[1]) {
      isPossible = did;
    }
  });

  if (isPossible) return;

  setData(select);
  setStone(target.id);
  changeTurn();
});
