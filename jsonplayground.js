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
	  console.log(value);
	}
    }
jsonObj.items.push({"tags":["aspaaaaaaaaa","aaaaaaaapi"],
                "owner":{"reputation":9},
                "body":"<p>i hello wording</code>"});
console.log(jsonObj);
//return code;


/// concatination of two requests in new array with all information
var firstr = [{ items: {tags:["tag1","tag2"], body:"some body"},has_more:true,quota_max:300,quota_remaining:281 }],secondr = [{ items: {tags:["tag4","tag42"], body:"some other body with <pre><code> some come</pre></code>"},has_more:true,quota_max:300,quota_remaining:271 }], result = [];

//result = result.push(firstrequest.items);
var result= firstr.concat(secondr);

for (i in result){ console.log(result[i])}

