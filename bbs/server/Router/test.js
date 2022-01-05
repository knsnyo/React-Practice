const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send({ test: '이거 맞니' });
});

module.exports = router;