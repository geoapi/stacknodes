//Takes query e.g. facebook API and returns all the search results of relevant questions which are tagged with an api tag, the first 100 results will be returned and saved as a json file
//  q is the query
exports.getQuestions = function(q){
var request = require('request');
var url = 'http://api.stackexchange.com/2.2/search?order=desc&tagged=api&sort=votes&site=stackoverflow&filter=withbody&pagesize=100';
//var read = require('readline-sync');
//var fs = require('fs');
//var q = read.question('What is your API search enquiry? ', {
//  hideEchoBack: false // The typed text on screen is hidden by `*` (default). 
//});


console.log(q);
url = url + '&q=' + q;
console.log(url);
request({
headers: {
    'Accept': 'application/json; charset=utf-8',
    'User-Agent': 'RandomHeader' 
         },
     uri: url,
     method: 'GET',
     gzip: true
         },
  function(err, res, body) {
     console.log("response.statusCode" + res.statusCode);
     console.log('server encoded the data as: ' + (res.headers['content-encoding'] || 'identity'));
//     console.log('the decoded data is: ' + body);
       array = JSON.parse(body);
//	console.log(array); //json format
//       console.log(typeof(body)); return string
//   save body result into a json file
      fs.writeFile('data.json',body, function(err){
         if (err) throw err;
        });

      });

}
