/* eslint-disable object-curly-newline */
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


let omok = [
  { yaxis: 0, xaxis: 0, did: false, player: 'none' },
  { yaxis: 0, xaxis: 1, did: false, player: 'none' },
  { yaxis: 0, xaxis: 2, did: false, player: 'none' },
  { yaxis: 0, xaxis: 3, did: false, player: 'none' },
  { yaxis: 0, xaxis: 4, did: false, player: 'none' },
  { yaxis: 0, xaxis: 5, did: false, player: 'none' },
  { yaxis: 0, xaxis: 6, did: false, player: 'none' },
  { yaxis: 0, xaxis: 7, did: false, player: 'none' },
  { yaxis: 0, xaxis: 8, did: false, player: 'none' },
  { yaxis: 0, xaxis: 9, did: false, player: 'none' },
  { yaxis: 0, xaxis: 10, did: false, player: 'none' },

  { yaxis: 1, xaxis: 0, did: false, player: 'none' },
  { yaxis: 1, xaxis: 1, did: false, player: 'none' },
  { yaxis: 1, xaxis: 2, did: false, player: 'none' },
  { yaxis: 1, xaxis: 3, did: false, player: 'none' },
  { yaxis: 1, xaxis: 4, did: false, player: 'none' },
  { yaxis: 1, xaxis: 5, did: false, player: 'none' },
  { yaxis: 1, xaxis: 6, did: false, player: 'none' },
  { yaxis: 1, xaxis: 7, did: false, player: 'none' },
  { yaxis: 1, xaxis: 8, did: false, player: 'none' },
  { yaxis: 1, xaxis: 9, did: false, player: 'none' },
  { yaxis: 1, xaxis: 10, did: false, player: 'none' },

  { yaxis: 2, xaxis: 0, did: false, player: 'none' },
  { yaxis: 2, xaxis: 1, did: false, player: 'none' },
  { yaxis: 2, xaxis: 2, did: false, player: 'none' },
  { yaxis: 2, xaxis: 3, did: false, player: 'none' },
  { yaxis: 2, xaxis: 4, did: false, player: 'none' },
  { yaxis: 2, xaxis: 5, did: false, player: 'none' },
  { yaxis: 2, xaxis: 6, did: false, player: 'none' },
  { yaxis: 2, xaxis: 7, did: false, player: 'none' },
  { yaxis: 2, xaxis: 8, did: false, player: 'none' },
  { yaxis: 2, xaxis: 9, did: false, player: 'none' },
  { yaxis: 2, xaxis: 10, did: false, player: 'none' },

  { yaxis: 3, xaxis: 0, did: false, player: 'none' },
  { yaxis: 3, xaxis: 1, did: false, player: 'none' },
  { yaxis: 3, xaxis: 2, did: false, player: 'none' },
  { yaxis: 3, xaxis: 3, did: false, player: 'none' },
  { yaxis: 3, xaxis: 4, did: false, player: 'none' },
  { yaxis: 3, xaxis: 5, did: false, player: 'none' },
  { yaxis: 3, xaxis: 6, did: false, player: 'none' },
  { yaxis: 3, xaxis: 7, did: false, player: 'none' },
  { yaxis: 3, xaxis: 8, did: false, player: 'none' },
  { yaxis: 3, xaxis: 9, did: false, player: 'none' },
  { yaxis: 3, xaxis: 10, did: false, player: 'none' },

  { yaxis: 4, xaxis: 0, did: false, player: 'none' },
  { yaxis: 4, xaxis: 1, did: false, player: 'none' },
  { yaxis: 4, xaxis: 2, did: false, player: 'none' },
  { yaxis: 4, xaxis: 3, did: false, player: 'none' },
  { yaxis: 4, xaxis: 4, did: false, player: 'none' },
  { yaxis: 4, xaxis: 5, did: false, player: 'none' },
  { yaxis: 4, xaxis: 6, did: false, player: 'none' },
  { yaxis: 4, xaxis: 7, did: false, player: 'none' },
  { yaxis: 4, xaxis: 8, did: false, player: 'none' },
  { yaxis: 4, xaxis: 9, did: false, player: 'none' },
  { yaxis: 4, xaxis: 10, did: false, player: 'none' },

  { yaxis: 5, xaxis: 0, did: false, player: 'none' },
  { yaxis: 5, xaxis: 1, did: false, player: 'none' },
  { yaxis: 5, xaxis: 2, did: false, player: 'none' },
  { yaxis: 5, xaxis: 3, did: false, player: 'none' },
  { yaxis: 5, xaxis: 4, did: false, player: 'none' },
  { yaxis: 5, xaxis: 5, did: false, player: 'none' },
  { yaxis: 5, xaxis: 6, did: false, player: 'none' },
  { yaxis: 5, xaxis: 7, did: false, player: 'none' },
  { yaxis: 5, xaxis: 8, did: false, player: 'none' },
  { yaxis: 5, xaxis: 9, did: false, player: 'none' },
  { yaxis: 5, xaxis: 10, did: false, player: 'none' },

  { yaxis: 6, xaxis: 0, did: false, player: 'none' },
  { yaxis: 6, xaxis: 1, did: false, player: 'none' },
  { yaxis: 6, xaxis: 2, did: false, player: 'none' },
  { yaxis: 6, xaxis: 3, did: false, player: 'none' },
  { yaxis: 6, xaxis: 4, did: false, player: 'none' },
  { yaxis: 6, xaxis: 5, did: false, player: 'none' },
  { yaxis: 6, xaxis: 6, did: false, player: 'none' },
  { yaxis: 6, xaxis: 7, did: false, player: 'none' },
  { yaxis: 6, xaxis: 8, did: false, player: 'none' },
  { yaxis: 6, xaxis: 9, did: false, player: 'none' },
  { yaxis: 6, xaxis: 10, did: false, player: 'none' },

  { yaxis: 7, xaxis: 0, did: false, player: 'none' },
  { yaxis: 7, xaxis: 1, did: false, player: 'none' },
  { yaxis: 7, xaxis: 2, did: false, player: 'none' },
  { yaxis: 7, xaxis: 3, did: false, player: 'none' },
  { yaxis: 7, xaxis: 4, did: false, player: 'none' },
  { yaxis: 7, xaxis: 5, did: false, player: 'none' },
  { yaxis: 7, xaxis: 6, did: false, player: 'none' },
  { yaxis: 7, xaxis: 7, did: false, player: 'none' },
  { yaxis: 7, xaxis: 8, did: false, player: 'none' },
  { yaxis: 7, xaxis: 9, did: false, player: 'none' },
  { yaxis: 7, xaxis: 10, did: false, player: 'none' },

  { yaxis: 8, xaxis: 0, did: false, player: 'none' },
  { yaxis: 8, xaxis: 1, did: false, player: 'none' },
  { yaxis: 8, xaxis: 2, did: false, player: 'none' },
  { yaxis: 8, xaxis: 3, did: false, player: 'none' },
  { yaxis: 8, xaxis: 4, did: false, player: 'none' },
  { yaxis: 8, xaxis: 5, did: false, player: 'none' },
  { yaxis: 8, xaxis: 6, did: false, player: 'none' },
  { yaxis: 8, xaxis: 7, did: false, player: 'none' },
  { yaxis: 8, xaxis: 8, did: false, player: 'none' },
  { yaxis: 8, xaxis: 9, did: false, player: 'none' },
  { yaxis: 8, xaxis: 10, did: false, player: 'none' },

  { yaxis: 9, xaxis: 0, did: false, player: 'none' },
  { yaxis: 9, xaxis: 1, did: false, player: 'none' },
  { yaxis: 9, xaxis: 2, did: false, player: 'none' },
  { yaxis: 9, xaxis: 3, did: false, player: 'none' },
  { yaxis: 9, xaxis: 4, did: false, player: 'none' },
  { yaxis: 9, xaxis: 5, did: false, player: 'none' },
  { yaxis: 9, xaxis: 6, did: false, player: 'none' },
  { yaxis: 9, xaxis: 7, did: false, player: 'none' },
  { yaxis: 9, xaxis: 8, did: false, player: 'none' },
  { yaxis: 9, xaxis: 9, did: false, player: 'none' },
  { yaxis: 9, xaxis: 10, did: false, player: 'none' },

  { yaxis: 10, xaxis: 0, did: false, player: 'none' },
  { yaxis: 10, xaxis: 1, did: false, player: 'none' },
  { yaxis: 10, xaxis: 2, did: false, player: 'none' },
  { yaxis: 10, xaxis: 3, did: false, player: 'none' },
  { yaxis: 10, xaxis: 4, did: false, player: 'none' },
  { yaxis: 10, xaxis: 5, did: false, player: 'none' },
  { yaxis: 10, xaxis: 6, did: false, player: 'none' },
  { yaxis: 10, xaxis: 7, did: false, player: 'none' },
  { yaxis: 10, xaxis: 8, did: false, player: 'none' },
  { yaxis: 10, xaxis: 9, did: false, player: 'none' },
  { yaxis: 10, xaxis: 10, did: false, player: 'none' },

  { yaxis: 7, xaxis: 0, did: false, player: 'none' },
  { yaxis: 7, xaxis: 1, did: false, player: 'none' },
  { yaxis: 7, xaxis: 2, did: false, player: 'none' },
  { yaxis: 7, xaxis: 3, did: false, player: 'none' },
  { yaxis: 7, xaxis: 4, did: false, player: 'none' },
  { yaxis: 7, xaxis: 5, did: false, player: 'none' },
  { yaxis: 7, xaxis: 6, did: false, player: 'none' },
  { yaxis: 7, xaxis: 7, did: false, player: 'none' },
  { yaxis: 7, xaxis: 8, did: false, player: 'none' },
  { yaxis: 7, xaxis: 9, did: false, player: 'none' },
  { yaxis: 7, xaxis: 10, did: false, player: 'none' },
];


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.send(`<h1>${req.protocol}://${req.get('host')}${req.originalUrl}</h1>`));

// 전체 자료구조 반환
app.get('/omok', (req, res) => {
  console.log('[GET]');
  res.send(omok);
});

// Y축 1열 전체 반환
app.get('/omok/y/:yaxis', (req, res) => {
  const { yaxis } = req.params;
  console.log('[GET] req.params Y-axis => ', req.params.yaxis);

  res.send(omok.filter(matrix => matrix.yaxis === +yaxis));
});

// X축 1열 전체 반환
app.get('/omok/x/:xaxis', (req, res) => {
  const { xaxis } = req.params;
  console.log('[GET] req.params X-axis => ', req.params.xaxis);

  res.send(omok.filter(matrix => matrix.xaxis === +xaxis));
});

// X, Y모두 만족하는것만 반환
app.get('/omok/:yaxis/:xaxis', (req, res) => {
  const { yaxis, xaxis } = req.params;
  console.log('[GET] req.params Y-axis => ', req.params.yaxis);
  console.log('[GET] req.params X-axis => ', req.params.xaxis);

  res.send(omok.filter(matrix => matrix.yaxis === +yaxis && matrix.xaxis === +xaxis));
});

// 아직 두지 않은것만 반환
app.get('/omok/didf', (req, res) => {
  res.send(omok.filter(matrix => matrix.did === false));
});

// 이미 둔것을 반환
app.get('/omok/didt', (req, res) => {
  res.send(omok.filter(matrix => matrix.did === true));
});


// 정보 업데이트
app.patch('/omok/:yaxis/:xaxis', (req, res) => {
  const { yaxis, xaxis } = req.params;

  const { did, player } = req.body;
  console.log('[PATCH] req.params Y, X=> ', req.params.yaxis, req.params.xaxis);
  console.log('[PATCH] req.body => ', did, player);

  omok = omok.map(matrix => (
    matrix.xaxis === +xaxis && matrix.yaxis === +yaxis ? { ...matrix, did, player } : matrix));
  res.send(omok);
});


// 전체 초기화
app.patch('/omok/init', (req, res) => {
  omok = omok.map(matrix => ({ ...matrix, did: false, player: 'none' }));
  res.send(omok);
});

app.listen(9000, () => console.log('Simple Rest API Server listening on port 9000'));
