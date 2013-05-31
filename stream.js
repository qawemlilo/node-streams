
var fs = require('fs'),
    files = fs.readdirSync('./files'),
    chunks = [],
    stream,
    currentfile,
    dhh = fs.createWriteStream('./dhh-interview.mp3');

// create an array with filenames (time)
files.forEach(function (file) {
    chunks.push(file.substring(0, 6));  
});

// Sort
chunks.sort(function (a, b) {
    return a - b;
});


// recursive function
function main() {
    if (!chunks.length) {
        dhh.end("Done");
        return;
    }
    
    currentfile = './files/' + chunks.shift() + '.mp3';
    stream = fs.createReadStream(currentfile);
    
    stream.pipe(dhh, {end: false});
    
    stream.on("end", function() {
        console.log(currentfile + ' appended');
        streamer();        
    });
}


main();
