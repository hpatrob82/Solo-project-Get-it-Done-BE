'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = '3333';

const express = require('express');
const app = express();
const cors = require('cors')
const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cors());
const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
})

const rootController = require('./routes/index');
const tasksController = require('./routes/Tasks');

app.use('/', rootController);
app.use('/Tasks', tasksController);