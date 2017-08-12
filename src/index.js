import * as babel from 'babel-core';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/:timestamp', function(request, response) {
  const timestamp = request.params.timestamp;
  response.json(getTimestampJSON(timestamp));
  response.send('Timestamp: ' + timestamp);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

function getNaturalDate(date) {
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
}

function getTimeStampJson(timestamp) {
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
        result.unix = date.getTime();
        result.natural = getNaturalDate(date);
    }
    return result;
}