//express 라는 파일을 찾고 못찾으면 node_module에서 검색
const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
    console.log(req);
    res.send("Hello from home");
}

function handleProfile(req, res) {
    res.send("You are on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

//4000 포트
app.listen(PORT, handleListening);