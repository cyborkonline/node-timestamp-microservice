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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJiYWJlbCIsImFwcCIsIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwidXNlIiwiZ2V0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwidGltZXN0YW1wIiwicGFyYW1zIiwianNvbiIsImdldFRpbWVzdGFtcEpTT04iLCJzZW5kIiwiZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyIsImdldE5hdHVyYWxEYXRlIiwiZGF0ZSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwicmVxIiwicmVzIiwic2V0IiwicmVhZEZpbGVTeW5jIiwiX19kaXJuYW1lIiwidGltZVJlc3VsdCIsInVuaXgiLCJuYXR1cmFsIiwiaXNOYU4iLCJwYXJzZUludCIsIkRhdGUiLCJnZXRUaW1lIl0sIm1hcHBpbmdzIjoiOztBQUFBOztJQUFZQSxLOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFDQSxJQUFNQyxNQUFNLHdCQUFaO0FBQ0EsSUFBTUMsT0FBT0MsUUFBUUMsR0FBUixDQUFZRixJQUFaLElBQW9CLElBQWpDOztBQUdBRCxJQUFJSSxHQUFKLENBQVEscUJBQVI7QUFDQUosSUFBSUssR0FBSixDQUFRLGFBQVIsRUFBdUIsVUFBU0MsT0FBVCxFQUFrQkMsUUFBbEIsRUFBNEI7QUFDakQsUUFBTUMsWUFBWUYsUUFBUUcsTUFBUixDQUFlRCxTQUFqQztBQUNBRCxhQUFTRyxJQUFULENBQWNDLGlCQUFpQkgsU0FBakIsQ0FBZDtBQUNBRCxhQUFTSyxJQUFULENBQWMsZ0JBQWdCSixTQUE5QjtBQUNBUixRQUFJYSxHQUFKO0FBQ0QsQ0FMRDs7QUFPQWIsSUFBSWMsTUFBSixDQUFXYixJQUFYLEVBQWlCO0FBQUEsV0FBTWMsUUFBUUMsR0FBUiw2QkFBc0NmLElBQXRDLENBQU47QUFBQSxDQUFqQjtBQUNBLFNBQVNnQixjQUFULENBQXdCQyxJQUF4QixFQUE4QjtBQUMxQixXQUFPQSxLQUFLQyxRQUFMLEtBQWtCLEdBQWxCLEdBQXdCRCxLQUFLRSxPQUFMLEVBQXhCLEdBQXlDLEdBQXpDLEdBQStDRixLQUFLRyxXQUFMLEVBQXREO0FBQ0g7O0FBRURyQixJQUFJSyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQVVpQixHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDN0JBLFFBQUlDLEdBQUosQ0FBUSxjQUFSLEVBQXVCLFdBQXZCO0FBQ0FELFFBQUlYLElBQUosQ0FBUyxhQUFHYSxZQUFILENBQWdCQyxZQUFVLGFBQTFCLEVBQXdDLE1BQXhDLENBQVQ7QUFDQUgsUUFBSVYsR0FBSjtBQUNILENBSkQ7O0FBTUEsU0FBU0YsZ0JBQVQsQ0FBMEJILFNBQTFCLEVBQXFDO0FBQ2pDLFFBQU1tQixhQUFhO0FBQ2ZDLGNBQU0sQ0FEUztBQUVmQyxpQkFBUztBQUZNLEtBQW5COztBQUtBLFFBQUlYLE9BQU8sQ0FBWDtBQUNBLFFBQUksQ0FBQ1ksTUFBTUMsU0FBU3ZCLFNBQVQsQ0FBTixDQUFMLEVBQWlDO0FBQzdCVSxlQUFPLElBQUljLElBQUosQ0FBU0QsU0FBU3ZCLFNBQVQsQ0FBVCxDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0hVLGVBQU8sSUFBSWMsSUFBSixDQUFTeEIsU0FBVCxDQUFQO0FBQ0g7QUFDRCxRQUFJLENBQUNzQixNQUFNWixLQUFLZSxPQUFMLEVBQU4sQ0FBTCxFQUE0QjtBQUN4Qk4sbUJBQVdDLElBQVgsR0FBa0JWLEtBQUtlLE9BQUwsRUFBbEI7QUFDQU4sbUJBQVdFLE9BQVgsR0FBcUJaLGVBQWVDLElBQWYsQ0FBckI7QUFDSDtBQUNELFdBQU9TLFVBQVA7QUFDSCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGJhYmVsIGZyb20gJ2JhYmVsLWNvcmUnO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG5cclxuXHJcbmFwcC51c2UoY29ycygpKVxyXG5hcHAuZ2V0KCcvOnRpbWVzdGFtcCcsIGZ1bmN0aW9uKHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgY29uc3QgdGltZXN0YW1wID0gcmVxdWVzdC5wYXJhbXMudGltZXN0YW1wO1xyXG4gIHJlc3BvbnNlLmpzb24oZ2V0VGltZXN0YW1wSlNPTih0aW1lc3RhbXApKTtcclxuICByZXNwb25zZS5zZW5kKCdUaW1lc3RhbXA6ICcgKyB0aW1lc3RhbXApO1xyXG4gIGFwcC5lbmQoKTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IGNvbnNvbGUubG9nKGBTZXJ2ZXIgcnVubmluZyBvbiBwb3J0ICR7UE9SVH1gKSlcclxuZnVuY3Rpb24gZ2V0TmF0dXJhbERhdGUoZGF0ZSkge1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKSArICcvJyArIGRhdGUuZ2V0RGF0ZSgpICsgJy8nICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG59XHJcblxyXG5hcHAuZ2V0KCcvJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgICByZXMuc2V0KCdjb250ZW50LXR5cGUnLCd0ZXh0L2h0bWwnKTtcclxuICAgIHJlcy5zZW5kKGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUrJy9pbmRleC5odG1sJywndXRmOCcpKTtcclxuICAgIHJlcy5lbmQoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lc3RhbXBKU09OKHRpbWVzdGFtcCkge1xyXG4gICAgY29uc3QgdGltZVJlc3VsdCA9IHtcclxuICAgICAgICB1bml4OiAwLFxyXG4gICAgICAgIG5hdHVyYWw6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBkYXRlID0gMDtcclxuICAgIGlmICghaXNOYU4ocGFyc2VJbnQodGltZXN0YW1wKSkpIHtcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUocGFyc2VJbnQodGltZXN0YW1wKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xyXG4gICAgICAgIHRpbWVSZXN1bHQudW5peCA9IGRhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRpbWVSZXN1bHQubmF0dXJhbCA9IGdldE5hdHVyYWxEYXRlKGRhdGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRpbWVSZXN1bHQ7XHJcbn0iXX0=