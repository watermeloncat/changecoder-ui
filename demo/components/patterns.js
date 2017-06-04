var fs = require('fs');
var path = require('path');

module.exports  = {
    DatePicker: fs.readFileSync(path.join(__dirname, './patterns/DatePicker/index.js'), 'utf-8'),
    Pager: fs.readFileSync(path.join(__dirname, './patterns/Pager/index.js'), 'utf-8'),
    Calendar: fs.readFileSync(path.join(__dirname, './patterns/Calendar/index.js'), 'utf-8')
}