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


// 횡방향 check 함수
const checkOmokHzt = () => {
  let hzt = [];
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
};


// 종방향 check 함수
const checkOmokVtl = () => {
  let vtl = [];
  // 종방향 check
  for (let i = 0; i < checkArray.length; i++) {
    for (let j = 1; j < checkArray[i].length; j++) {
      if (checkArray[j][i] !== 'none' && checkArray[j][i] === checkArray[j - 1][i]) {
        vtl = vtl.length === 0 ? [...vtl, {
          player: checkArray[j - 1][i],
          yaxis: i,
          xaxis: j - 1
        }, {
          player: checkArray[j][i],
          yaxis: i,
          xaxis: j
        }] : [...vtl, {
          player: checkArray[j][i],
          yaxis: i,
          xaxis: j
        }];
        if (vtl.length === 5) {
          console.log('[victory!]', vtl);
        }
      } else {
        vtl = [];
      }
    }
  }
};


// 대각선 정방향 check 함수
const checkOmokDiagonalFw = () => {
  let diagonalFw = [];

  let diagonalCount = checkArray[0].length - 1;
  for (let i = 1; i < checkArray.length - 1; i++) {
    for (let j = 1; j < diagonalCount; j++) {
      if (checkArray[i + j - 1][j] !== 'none' && checkArray[i + j - 1][j] === checkArray[i + j - 2][j - 1]) {
        console.log(111);
      }
    }
    diagonalCount -= 1;
  }
};


// 승패 확인용 배열 획득
const setCheckArray = data => {
  let setIndex = 0;
  checkArray.forEach(innerArr => {
    innerArr.forEach((_, i) => {
      innerArr[i] = data[setIndex].player;
      setIndex += 1;
    });
  });
  checkOmokHzt();
  checkOmokVtl();
  checkOmokDiagonalFw();
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
