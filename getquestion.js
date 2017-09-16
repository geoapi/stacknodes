const cheerio = require('cheerio');
var request = require('request');
var module1 = require('./objectKeysVals');
var url = 'http://api.stackexchange.com/2.2/search?order=desc&tagged=api&sort=activity&site=stackoverflow&filter=withbody';
var read = require('readline-sync');
const loadedCodes = [];
var q = read.question('What is your API search enquiry? ', {
  hideEchoBack: false // The typed text on screen is hidden by `*` (default). 
});


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
     console.log('server encoded the data as: ' + (res.headers['content-encoding'] || 'identity'))
//     console.log('the decoded data is: ' + body);
       array = JSON.parse(body);
     //  console.log(getValues(array,'title'));
       bodyArray = module1.getValues(array,'body');

       //firstItem = bodyArray.shift(); //removing one element from the array - testing
       // console.log(firstItem);	
	for (var bodyElem in bodyArray){
		//console.log(bodyArray[bodyElem]);       
		 // loading cheerio
                //	const loadedCodes = [];
		const loadCode = cheerio.load(bodyArray[bodyElem]);
		loadCode('code').each(function(i, elem){
                	loadedCodes[i] = loadCode(this).text();
           	 });
             };
        console.log(loadedCodes); 	
//      const $ = cheerio.load(getValues(array,'body'));
//      console.log($('<code>').find();
    });
