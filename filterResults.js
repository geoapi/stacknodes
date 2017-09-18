var fs = require('fs');
fs.readFile('data.json', function (err, content){
if (err) throw err;
var jsonobj = JSON.parse(content);
//console.log(jsonobj);


for ( var i in jsonobj.items){ console.log(jsonobj.items[i]["title"])};
});
//for ( var i=0; i <= noob; i++ )
// {
//  console.log(jsonobj["items"][i]["question_id"]);
// };
