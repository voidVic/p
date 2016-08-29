var debug = require('debug')('onlineTesting');
var app = require('../server');

app.set('port', process.env.PORT || 9299);

var server = app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + server.address().port);
});
