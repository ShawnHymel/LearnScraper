var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var csv = require('csv');

url = "https://learn.sparkfun.com/tutorials/blynk-board-washerdryer-alarm"

var output = [];
var parser = csv.parse({delimiter: ";"});

parser.on('readable', function() {
    while(record = parser.read()) {
        output.push(record);
    }
});

parser.on('error', function(err) {
    console.log(err.message);
});

parser.on('finish', function() {
    console.log(output);
});

//***TEST***
//parser.write("root:x:0:0:root:/root:/bin/bash\n");
//parser.write("someone:x:1022:1022:a funny cat:/home/someone:/bin/bash\n");
//parser.end();

fs.createReadStream(__dirname + "/learn_analytics_2015a.csv").pipe(parser);

// Get page
/*request(url, function(err, res, html) {
    if (!err) {
        var $ = cheerio.load(html);
        
        $('.tag').filter(function() {
            var tags = $(this);
            console.log(tags['0'].children[0].data);
        });
    }
});*/