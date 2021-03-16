'use strict';

const express = require('express'),
    router = express.Router();


router.get('/', (req, res) => {
    res.json("Welcome to my Task Generator App").status(200);
})

module.exports = router;