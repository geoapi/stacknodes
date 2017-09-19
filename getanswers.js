exports.getanswers = function(qids) {

var fs = require('fs');
var str1 ='';
var dc = require('./detectcode');

for (i in qids) {
	if (i == qids.length-1) {sc = ''} else {sc =';'}
	str1 = str1 + qids[0]+ sc;
  }
console.log(str1);
var request = require('request');
url1 = "https://api.stackexchange.com/2.2/questions/"
url2= "/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody&key=keqVr01zTBktmTggfO2lMg(("
url = url1 + str1 + url2;
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
     jsonobj = JSON.parse(body);
 //    fs.writeFile('answersdata.json',body, function(err){
 //        if (err) throw err;
 //       });
   var fobj = {items:[]};
   for ( var i in jsonobj.items){
        var codeblks = dc.detectCode(jsonobj.items[i]["body"]);
        if (codeblks && codeblks.length)
           {
               fobj.items.push(
              { "is_accepted": jsonobj.items[i]["is_accepted"],
                "question_id": jsonobj.items[i]["question_id"],
                "creation_date": jsonobj.items[i]["creation_date"],
                "extraction_date": new Date(),
		"last_activity_date":jsonobj.items[i]["last_activity_date"],
                "codeblocks":codeblks
              });
           }
          }

 var jsonresult = JSON.stringify(fobj);
      fs.writeFile("answersCodeblks.json", jsonresult, 'utf8', function(err){
         if (err) throw err;
         console.log('complete'); });
})};
    
