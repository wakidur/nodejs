var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Wakidur it is you first node project');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


