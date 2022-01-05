// 기본 세팅
const express = require('express');
const app = express();

// 추가하는 거 같음.
const test = require('./Router/test');
app.use("/api", test);


// 포트번호 접속
const port = 5000;
app.listen(port, () => {
	console.log(`${port}`);
})