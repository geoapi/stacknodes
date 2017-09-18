exports.detectCode = function(body) {
//let us says we have an html with possible code blocks passed to here with html text content
//we need to return an array of code blocks only

const cheerio = require('cheerio');
const loadedCodes = [];
const loadCode = cheerio.load(body);
	loadCode('code').each(function(i, elem){
               	loadedCodes[i] = loadCode(this).text();
       	 });
console.log(loadedCodes);
return loadedCodes;
    };
