const fs = require('fs');

function log(message){
    const entry = new Date().toISOString() + ' - ' + message + '\\n';
    fs.appendFileSync('app.log', entry);
}

module.exports = log;
