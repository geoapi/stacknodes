//this module gets only questions ids from previously filtered results with code blocks, 
// to use it 
//var dq = require('./filterQsforAs')
// var da = dq.filterAnswers()
// da now is an array with question ids
//console.log(da);
//[ 46244980,  46243855, 46237561,... ]

exports.filterAnswers = function(){
var fs = require('fs');
qids = [];
data = fs.readFileSync('resultCodeblks.json');
jsonobj = JSON.parse(data);
questions_ids_array = [];
for ( var i in jsonobj.items){ 
//        console.log(jsonobj.items[i]["question_id"]);
        questions_ids_array[i] =jsonobj.items[i]["question_id"];
	      } 
return questions_ids_array;
  }         
