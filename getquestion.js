const cheerio = require('cheerio')
var request = require('request');
var url = 'http://api.stackexchange.com/2.2/search?order=desc&tagged=api&sort=activity&site=stackoverflow&filter=withbody';
var read = require('readline-sync');
var q = read.question('What is your API search enquiry? ', {
  hideEchoBack: false // The typed text on screen is hidden by `*` (default). 
});


// return Objects, Keys and Values based on keywords. Code Tut soruce http://techslides.com/how-to-parse-and-search-json-in-javascript

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));    
        } else 
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if (i == key && obj[i] == val || i == key && val == '') { //
            objects.push(obj);
        } else if (obj[i] == val && key == ''){
            //only add if the object is not already in the array
            if (objects.lastIndexOf(obj) == -1){
                objects.push(obj);
            }
        }
    }
    return objects;
}

function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}

function getKeys(obj, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getKeys(obj[i], val));
        } else if (obj[i] == val) {
            objects.push(i);
        }
    }
    return objects;
}
//var jsonObj = {};
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
       bodyArray = getValues(array,'body');
       firstItem = bodyArray.shift();
       console.log(firstItem);	
       

   // loading cheerio
	const loadedCodes = [];
	const loadCode = cheerio.load(firstItem);
	loadCode('code').each(function(i, elem){
           loadedCodes[i] = loadCode(this).text();
            });
        console.log(loadedCodes); 	
//      const $ = cheerio.load(getValues(array,'body'));
//      console.log($('<code>').find();
    });
