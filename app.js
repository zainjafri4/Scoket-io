const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const page = require('./helloWorld')

app.use('/', page);

module.exports = app;
