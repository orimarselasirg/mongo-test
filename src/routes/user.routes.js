const express = require('express');
const router = express.Router();
const { getUser } = require('../controller/user.controller');

router.get('/users/:id', getUser);

module.exports = router;