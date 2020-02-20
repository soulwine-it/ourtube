import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
// // 디폴트 값이 아닐때는 아래와 같이 표현
// import {
//   userRouter
// } from "./routers/userRouter";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;

// import express from "express";
// import morgan from "morgan";
// import helmet from "helmet";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";

// //express 라는 파일을 찾고 못찾으면 node_module에서 검색
// // const express = require("express");
// const app = express();
// //포트 번호
// const PORT = 4000;

// const handleListening = () =>
//   console.log(`Listening on: http://localhost:${PORT}`);

// const handleHome = (req, res) => res.send("Hello from my ass");

// // middlewware 요청과 응답 사이의 시간
// const betweenHome = (req, res, next) => {
//   console.log("Between");
//   next();
// };

// // function handleProfile(req, res) {
//   // res.send("You are on my profile");
// // }
// //es 6 version
// const handleProfile = (req, res) => {
//   res.send("You are on my profile");
// };

// //middleware가 어디에 있는지가 중요
// // app.use(betweenHome);
// // middleware에 res.send("")를 추가하면 페이지가 멈춤

// //cookie parser
// app.use(cookieParser());

// //body parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(helmet());
// //morgan은 logging임
// app.use(morgan("dev"));

// app.get("/", handleHome);

// app.get("/profile", handleProfile);

// //4000 포트
// // app.listen(PORT, handleListening);
