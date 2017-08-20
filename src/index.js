import * as babel from 'babel-core';
import express from 'express';
import fs from 'fs'
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors())
app.get('/:timestamp', function(request, response) {
  const timestamp = request.params.timestamp;
  response.json(getTimestampJSON(timestamp));
  response.send('Timestamp: ' + timestamp);
  app.end();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
function getNaturalDate(date) {
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
}

app.get('/', function (req, res) {
    res.set('content-type','text/html');
    res.send(fs.readFileSync(__dirname+'/index.html','utf8'));
    res.end();
});

function getTimestampJSON(timestamp) {
    const timeResult = {
        unix: 0,
        natural: 0,
    };

    let date = 0;
    if (!isNaN(parseInt(timestamp))) {
        date = new Date(parseInt(timestamp));
    } else {
        date = new Date(timestamp)
    }
    if (!isNaN(date.getTime())) {
        timeResult.unix = date.getTime();
        timeResult.natural = getNaturalDate(date);
    }
    return timeResult;
}