var fs = require('fs');
var path = require('path');

module.exports  = {
    DatePicker: fs.readFileSync(path.join(__dirname, './test.js'), 'utf-8')
}