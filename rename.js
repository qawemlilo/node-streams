
var fs = require('fs');

var files = fs.readdirSync('./files');

files.forEach(function (file) {
    var currentname = './files/' + file, 
        date = parseDate(file),
        newname = './files/' + date.split(';').join('') + '.mp3';

    renameFile(currentname, newname); 
    console.log('Renamed ' + currentname + ' to ' + newname);    
}); 


/*
    This function renames a file
    
    @param: (String) currentname - current file name
    @param: (String) newname - new file name     
*/
function renameFile(currentname, newname) {
    fs.renameSync(currentname, newname);
}


/*
    Extracts date/time from file name string
    
    @param: (String) filename - file name 
*/
function parseDate(filename) {
    var date = filename.substring(11, 19);
    
    return date;
}

console.log('Done');


