//exports.detectCode = function(jsonObj) {


var jsonObj = {"items":[{
                "tags":["php","api"],
                "owner":{"reputation":2409},
                "body":"<p>Today I was trying to <code> some code </code>"
                        },
			{
                "tags":["asp","api"],
                "owner":{"reputation":9},
                "body":"<p> trying to <code> some code </code>"
                        }


]};
for (var index in jsonObj){
var item = jsonObj[index];
	for (var key in item) {
	  var value = item[key];
	  //console.log(value);
	}
    }

//return code;

