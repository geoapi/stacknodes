exports.detectCode = function(body) {
//let us says we have an html with possible code blocks passed to here with html text content
//we need to return an array of code blocks only
// usage require the module first eg:
// var dc = require('./detectcode');
//send the html of your question or answer directly as is such as and invoke detectCode method:
// var result = dc.detectCode(body);
// returns [] empty array if no code detected or an array of codes blocks

const cheerio = require('cheerio');
const loadedCodes = [];
const loadCode = cheerio.load(body);
	loadCode('code').each(function(i, elem){
               	loadedCodes[i] = loadCode(this).text();
       	 });
//console.log(loadedCodes);
return loadedCodes;
    };
