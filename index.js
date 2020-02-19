//express 라는 파일을 찾고 못찾으면 node_module에서 검색
const express = require("express");
const app = express();

const PORT = 4000;
function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

//4000 포트
app.listen(PORT, handleListening);
