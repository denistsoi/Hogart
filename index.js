var express = require('express');
var enchildad = require('enchilada');
var quesadilla = require('quesadilla');
var port = process.env.PORT || 8000;

express()
  .use(express.static(__dirname))
  .listen(port, function() {
    console.log('Server is listening on port', port);
  });