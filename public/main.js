const $goData = document.querySelector('.go-data');
const $goItem = document.querySelectorAll('.go-item');
const $resetMain = document.querySelector('.reset-main');
const $setMsg = document.querySelector('.set-msg');

// status

let turn = '';
let omok = [];
let game = true;
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


// 이니셜
const init = async () => {
  const { data } = await axios.patch('/omok/init');
  omok = data;
  omok.forEach(({ player }, i) => {
    $goItem[i].firstElementChild.classList.add(`${player}`);
    if (player === 'none') {
      $goItem[i].firstElementChild.classList.remove('black');
      $goItem[i].firstElementChild.classList.remove('white');
    }
  });
  getTurn();
  game = true;
  $setMsg.textContent = '';
};

const setGame = arrData => {
  game = false;
  $setMsg.textContent = `승리는 ${arrData[0].player} 입니다!`;
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
          setGame(hzt);
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
          setGame(vtl);
          console.log('[victory!]', vtl);
        }
      } else {
        vtl = [];
      }
    }
  }
};


// 대각선 West check 함수
const checkOmokDiagonalWS = () => {
  let diagonal = [];

  let diagonalCount = checkArray[0].length - 1;
  for (let i = 1; i < checkArray.length - 1; i++) {
    for (let j = 1; j < diagonalCount; j++) {
      if (checkArray[i + j - 1][j] !== 'none' && checkArray[i + j - 1][j] === checkArray[i + j - 2][j - 1]) {
        console.log(111);
        diagonal = diagonal.length === 0 ? [...diagonal, {
          player: checkArray[i + j - 2][j - 1],
          yaxis: i + j - 2,
          xaxis: j - 1
        }, {
          player: checkArray[i + j - 1][j],
          yaxis: i + j - 1,
          xaxis: j
        }] : [...diagonal, {
          player: checkArray[i + j - 1][j],
          yaxis: i + j - 1,
          xaxis: j
        }];
        if (diagonal.length === 5) {
          setGame(diagonal);
          console.log('[victory! WS]', diagonal);
        }
      } else {
        diagonal = [];
      }
    }
    diagonalCount -= 1;
  }
};


// 대각선 WN check 함수
const checkOmokDiagonalWN = () => {
  let diagonal = [];

  let diagonalCount = checkArray[0].length - 1;
  for (let i = 2; i < checkArray.length - 1; i++) {
    for (let j = 1; j < diagonalCount; j++) {
      // console.log(j, i + j - 1);
      if (checkArray[j][i + j - 1] !== 'none' && checkArray[j][i + j - 1] === checkArray[j - 1][i + j - 2]) {
        diagonal = diagonal.length === 0 ? [...diagonal, {
          player: checkArray[j - 1][i + j - 2],
          yaxis: j - 1,
          xaxis: i + j - 2
        }, {
          player: checkArray[j][i + j - 1],
          yaxis: j,
          xaxis: i + j - 1
        }] : [...diagonal, {
          player: checkArray[j][i + j - 1],
          yaxis: j,
          xaxis: i + j - 1
        }];
        if (diagonal.length === 5) {
          setGame(diagonal);
          console.log('[victory! WN]', diagonal);
        }
      } else {
        diagonal = [];
      }
    }
    diagonalCount -= 1;
  }
};


// 대각선 ES check 함수
const checkOmokDiagonalES = () => {
  let diagonal = [];

  let diagonalCount = 0;
  for (let i = 1; i < checkArray.length - 1; i++) {
    let loofCount = 0;
    for (let j = checkArray[0].length - 2; j >= diagonalCount; j--) {
      // console.log(i + loofCount, j);
      if (checkArray[i + loofCount][j] !== 'none' && checkArray[i + loofCount][j] === checkArray[i + loofCount - 1][j + 1]) {
        diagonal = diagonal.length === 0 ? [...diagonal, {
          player: checkArray[i + loofCount - 1][j + 1],
          yaxis: i + loofCount - 1,
          xaxis: j + 1
        }, {
          player: checkArray[i + loofCount][j],
          yaxis: i + loofCount,
          xaxis: j
        }] : [...diagonal, {
          player: checkArray[i + loofCount][j],
          yaxis: i + loofCount,
          xaxis: j
        }];
        if (diagonal.length === 5) {
          setGame(diagonal);
          console.log('[victory! ES]', diagonal);
        }
      } else {
        diagonal = [];
      }
      loofCount += 1;
    }
    diagonalCount += 1;
  }
};


// 대각선 EN check 함수
const checkOmokDiagonalEN = () => {
  let diagonal = [];

  let loofCount = 0;
  for (let i = 0; i < checkArray.length - 2; i++) {
    for (let j = 1; j < loofCount + 2; j++) {
      // console.log(j, i - j + 1);
      if (checkArray[j][i - j + 1] !== 'none' && checkArray[j][i - j + 1] === checkArray[j - 1][i - j + 2]) {
        diagonal = diagonal.length === 0 ? [...diagonal, {
          player: checkArray[j - 1][i - j + 2],
          yaxis: j - 1,
          xaxis: i - j + 2
        }, {
          player: checkArray[j][i - j + 1],
          yaxis: j,
          xaxis: i - j + 1
        }] : [...diagonal, {
          player: checkArray[j][i - j + 1],
          yaxis: j,
          xaxis: i - j + 1
        }];
        if (diagonal.length === 5) {
          setGame(diagonal);
          console.log('[victory! EN]', diagonal);
        }
      } else {
        diagonal = [];
      }
    }
    loofCount += 1;
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
  checkOmokDiagonalWS();
  checkOmokDiagonalWN();
  checkOmokDiagonalES();
  checkOmokDiagonalEN();
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
  if (!target.matches('.go-data > div') || !game) return;
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


// reset
$resetMain.addEventListener('click', () => {
  console.log(111);
  init();
});
