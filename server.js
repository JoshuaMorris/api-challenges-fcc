var express = require('express'),
    helmet = require('helmet'),
    moment = require('moment'),
    app = express(),
    port = process.env.PORT || 8080;
    
app.use(helmet());
app.use(express.static('public'));
    
app.get('/:incoming', function(req, res) {
    var timestamp = req.params.incoming,
        returnDates = { 
            unix: null,
            natural: null
        };
        
    console.log(timestamp);   
    
    if (timestamp) {
        var unix = moment.unix(timestamp),
            text = moment(timestamp, 'MMMM DD, YYYY'),
            valid = (text.isValid()) ? text : unix;
        
        if (valid.isValid()) {
            returnDates.unix = valid.format("X");
            returnDates.natural = valid.format("MMMM DD, YYYY");
        }
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(returnDates));
        res.end();
    }
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(port, function() {
    console.log('timestamp microservice running on ' + port); 
});