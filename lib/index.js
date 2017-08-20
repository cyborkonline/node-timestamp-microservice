'use strict';

var _babelCore = require('babel-core');

var babel = _interopRequireWildcard(_babelCore);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

app.use((0, _cors2.default)());
app.get('/:timestamp', function (request, response) {
    var timestamp = request.params.timestamp;
    response.json(getTimestampJSON(timestamp));
    response.send('Timestamp: ' + timestamp);
    app.end();
});

app.listen(PORT, function () {
    return console.log('Server running on port ' + PORT);
});
function getNaturalDate(date) {
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
}

app.get('/', function (req, res) {
    res.set('content-type', 'text/html');
    res.send(_fs2.default.readFileSync(__dirname + '/index.html', 'utf8'));
    res.end();
});

function getTimestampJSON(timestamp) {
    var timeResult = {
        unix: 0,
        natural: 0
    };

    var date = 0;
    if (!isNaN(parseInt(timestamp))) {
        date = new Date(parseInt(timestamp));
    } else {
        date = new Date(timestamp);
    }
    if (!isNaN(date.getTime())) {
        timeResult.unix = date.getTime();
        timeResult.natural = getNaturalDate(date);
    }
    return timeResult;
}