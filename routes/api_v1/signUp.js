"use strict";

var express = require('express');
var router = express.Router();

router.post( '/’, function (req, res, next) {
    console.log(req.body);
    res.json( { success:true, result: req.body } );
});

module.exports = router;