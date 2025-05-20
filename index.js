var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Sin HELLO NodeJS')
})

app.listen(app.get('port'), '0.0.0.0', function() {
  console.log("Node app is running at 0.0.0.0:" + app.get('port'))
})
