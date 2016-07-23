'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
   res.send('<H1>Hello express! </h1>');
});

app.listen(3000, () => {
	console.log('Running on Port: ', 3000);
});