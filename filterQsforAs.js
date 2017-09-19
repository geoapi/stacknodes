exports.filterAnswers = function(){
var fs = require('fs');
qids = [];
var data = fs.readFile('resultCodeblks.json');
var jsonobj = JSON.parse(data);
for ( var i in jsonobj.items){ 
        qids[i] = jsonobj.items[i]["question_id"];
              }          
console.log(qids);
return qids;
}
        
