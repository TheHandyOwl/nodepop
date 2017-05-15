"use strict";

var express = require('express');
var router = express.Router();
const Anuncio = require('../../models/Anuncio');

/* GET /apiv1/anuncios */
router.get('/', (req, res, next) => {
    res.json( { success: true } );
});

module.exports = router;