var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var csv = require('csv');

url = "https://learn.sparkfun.com/tutorials/blynk-board-washerdryer-alarm"

var parser = csv.parse();

csv()
.from.string(
  '#Welcome\n"1","2","3","4"\n"a","b","c","d"',
  {comment: '#'} )
.to.array( function(data){
  console.log(data)
} );
/*
var parser = parse({delimiter: ';'}, function(err, data){
  console.log(data);
});
*/

fs.createReadStream(__dirname+'/learn_analytics_2015.csv').pipe(parser);

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