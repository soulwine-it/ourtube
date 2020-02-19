import express from "express";

//express 라는 파일을 찾고 못찾으면 node_module에서 검색
// const express = require("express");

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my ass");

// function handleProfile(req, res) {
//   res.send("You are on my profile");
// }
//es 6 version
const handleProfile = (req, res) => {
  res.send("You are on my profile");
};

app.get("/", handleHome);

app.get("/profile", handleProfile);

//4000 포트
app.listen(PORT, handleListening);
