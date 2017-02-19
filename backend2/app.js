var express = require('express');
var app = express();
app.use(express.static('homework'));
app.listen(3000,() => {
  console.log('Project hack font-end in port 3000');
});
