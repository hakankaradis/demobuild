var express = require('express');
var app = express();

app.use(express.static('docs'));

app.listen(8090, function() {
  console.log('Server is up and running!');
});
