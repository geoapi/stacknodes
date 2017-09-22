//This module takes nothing! it opens data.json and create a new json obj of all the questions that has code blocks.
//Result is stored in a json file valled resultCodeblks.json

exports.filterResult = function(arg1){
var dc = require('./detectcode');
var fs = require('fs');
var detectLang = require('lang-detector');

fs.readFile('data.json', function (err, content){
   if (err) throw err;
   var jsonobj = JSON.parse(content);
//   if (arg1 == null || arg1 =='') {
//      arg1 = "body"; //if nothing passed return body!
//        };
   var fobj = {items:[]};
   for ( var i in jsonobj.items){ 
        var codeblks = dc.detectCode(jsonobj.items[i]["body"]);
	stro = JSON.stringify(codeblks);
       // loc = ((stro.match(new RegExp("/n", "g")) || []).length); doesn't work for codes

//	console.log(loc);
	var detectedObj = detectLang(stro, {statistics:true});
//	console.log(detectedObj);
        if (codeblks && codeblks.length) 
           {
	       fobj.items.push(
	      { "tags": jsonobj.items[i]["tags"],
                "question_id": jsonobj.items[i]["question_id"],
	        "creation_date": jsonobj.items[i]["creation_date"],
		"extraction_date": new Date(),
		"title":jsonobj.items[i]["title"],
		"codeblocks":codeblks,
		"languages":detectedObj
              }
                              );	
	   }
        }
      //console.log(fobj);
      var jsonresult = JSON.stringify(fobj);
      fs.writeFile("resultCodeblks.json", jsonresult, 'utf8', function(err){
         if (err) throw err;
         console.log('complete');
        });
      
});           
};
