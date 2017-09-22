var rp = require('request-promise');

var i= 1;

function getAllData(page){
let url = 'http://api.stackexchange.com/2.2/search?order=desc&tagged=api&sort=votes&site=stackoverflow&filter=withbody&pagesize=100&q=facebook-api&page='+(page || 1)
console.log(url)
return rp({ url:url, json:true, "method":"GET", headers: {
    'Accept': 'application/json; charset=utf-8',
    'User-Agent': 'RandomHeader'
         },gzip:true })
  .then(function(data) {
    console.log("%s %s %s",url, data.items.has_more);
    if (data.has_more && page < 3 )  { //currently only few pages determined by page < number
	return getAllData(page + 1)
        .then(function(more){ 
          return data.items.concat(more)
         })
        }
      return data;
  })
  };

getAllData(1).then(function(results){
console.log(results);

});



