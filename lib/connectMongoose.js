"use strict";

const mongoose = require('mongoose');
const conn = mongoose.connection;

mongoose.Promise = global.Promise;

conn.on( 'error', err => {
    console.log('Error de conexión a la BBDD', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log('Se ha conectado a la BBDD');
});

const server_name = 'localhost';
const server_ddbb = 'nodepop';
const server_string_connection = 'mongodb://' + 
    server_name + 
    '/' + 
    server_ddbb;
mongoose.connect(server_string_connection);