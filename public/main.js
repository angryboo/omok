const $goData = document.querySelector('.go-data');
const $goItem = document.querySelectorAll('.go-item');

// status

let turn = '';
let omok = [];
const checkArray = Array.from({ length: 11 }, () => Array.from({ length: 11 }, () => ''));


// 현재 turn get
const getTurn = async () => {
  // eslint-disable-next-line no-undef
  const { data } = await axios.get('/turn');
  turn = data.player;
};


// 바둑돌 set
const setStone = () => {
  omok.forEach(({ player }, i) => {
    $goItem[i].firstElementChild.classList.add(`${player}`);
    if (player !== 'none') $goItem[i].firstElementChild.classList.remove('none');
  });
};


const checkOmok = () => {
  let hzt = [];
  let vtl = [];

  // 횡방향 check
  for (let i = 0; i < checkArray.length; i++) {
    for (let j = 1; j < checkArray[i].length; j++) {
      if (checkArray[i][j] !== 'none' && checkArray[i][j] === checkArray[i][j - 1]) {
        hzt = hzt.length === 0 ? [...hzt, {
          player: checkArray[i][j - 1],
          yaxis: i,
          xaxis: j - 1
        }, {
          player: checkArray[i][j],
          yaxis: i,
          xaxis: j
        }] : [...hzt, {
          player: checkArray[i][j],
          yaxis: i,
          xaxis: j
        }];
        if (hzt.length === 5) {
          console.log('[victory!]', hzt);
        }
      } else {
        hzt = [];
      }
    }
  }
  console.log(hzt);
};

// 승태 확인용 배열 획득
const setCheckArray = data => {
  let setIndex = 0;
  checkArray.forEach(innerArr => {
    innerArr.forEach((_, i) => {
      innerArr[i] = data[setIndex].player;
      setIndex += 1;
    });
  });
  console.log(checkArray);
  checkOmok();
};


// 서버에서 자료구조 획득
const getData = async () => {
  try {
    // eslint-disable-next-line no-undef
    const { data } = await axios.get('/omok');
    omok = data;
    setStone();
    setCheckArray(data);
  } catch (e) {
    console.error(e);
  }
};
window.onload = () => {
  getData();
  getTurn();
};


// turn change
const changeTurn = async () => {
  // eslint-disable-next-line no-undef
  const { data } = await axios.patch('/turn');
  turn = data.player;
};


// 서버로 바둑돌 data 전송
const setData = async select => {
  const payload = { did: true, player: turn };
  // eslint-disable-next-line no-undef
  const { data } = await axios.patch(`/omok/${select[0]}/${select[1]}`, payload);
  omok = data;
  setStone();
  setCheckArray(data);
};


// 좌표 획득
const getAxis = target => {
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
  changeTurn();
});
