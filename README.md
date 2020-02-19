# OurTube

Cloning Youtube with Vanilla and NodeJS

gitignore:  
node_modules  
package-lock.json

using site:  
Babel : https://babeljs.io/ 최신의 Javascript 코드를 예전의 Javascript코드로 변환해줌

install:
node js
npm install express (in terminal)  
npm install @babel/node (in terminal)  
npm install @babel/preset-env (in terminal)  
npm install @babel/core (in terminal)  
npm install nodemon -D (in terminal 반영하려면 대문자로 -D를 붙이는 것 프로젝트에 필요한 것이 아니라 개발자에게 필요한 것이니 -D를 붙여 project 밖으로 빼냄 저장할때 마다 서버를 새로 실행함)  
npm install morgan(morgan middleware 설치 logging)
npm install helmet(보안관련)
npm install body-parser(body로부터 정보를 얻을 수 있게 해주는 것, 서버가 유저로부터 받은 데이터를 이해하는 방법)  
npm install cookie-parser(cookie에 유저 정보 저장)

description  
babelrc: 우리가 원하는 node.js와 js관련된 필요한 것들을 모두 넣을 것입니다.
