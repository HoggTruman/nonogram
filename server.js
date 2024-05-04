'use strict';

const express = require('express');
const app = express();
//import bootstrap from 'bootstrap';

// middleware 
app.use('/js', express.static(process.cwd() + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS // THESE SHOULD BE IN WEBPACK IF WANT TO USE THEM UNDER resolve: alias
app.use('/css', express.static(process.cwd() + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/scripts', express.static(process.cwd() + '/scripts'));

// EITHER USE FIRST WITH JUST '/' as publicPath or second with '/dist/'
// app.use(express.static(__dirname + '/dist'));
app.use('/dist', express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/dist/index.html');
})

app.get('/:size/:seed', (req, res) => {
  res.sendFile(process.cwd() + '/dist/index.html')
})

app.get('*', (req, res) => {
  res.send("Page Not Found")
})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})