var rp = require('request-promise');
var fs = require('fs');
var i= 1;

function getAllData(page){
let url = 'http://api.stackexchange.com/2.2/search?order=desc&tagged=api&sort=votes&site=stackoverflow&filter=withbody&pagesize=100&q=facebook-graph-api&page='+(page || 1)
const key = 'keqVr01zTBktmTggfO2lMg((';
url = url + '&key='+ key;


//console.log(url);
return rp({ url:url, 
            json:true, 
            method:"GET",
            headers: {
             'Accept': 'application/json; charset=utf-8' },gzip:true })
  .then(function(data) {
//            console.log("%s %s ",url);

       console.log("%s %s ",url, data.quota_remaining);

    if (data.has_more && page < 100)  { //currently only few pages determined by page < number
	return getAllData(page + 1)
        .then(function(more){ 
//          data = JSON.parse(data);
          return data.items.concat(more)
         })
        }
      return data;
//      console.log(JSON.parse(data));
  })
  };

getAllData(1).then(function(results){
fs.writeFile('requestcollection.json',JSON.stringify(results), function(err){
         if (err) throw err;
console.log('requests done');
console.log(results);        
});

});



