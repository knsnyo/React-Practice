const express = require('express');
const app = express()

const msg = 'msg'

app.listen(8080, () => {
	console.log(`${msg}`);
});

app.get(`/${msg}`, (req, res) => {
	res.send(`${msg}`);
});