
var dq = require('./filterQsforAs');
var qs= dq.filterAnswers();
var getans = require('./getanswers');
var ans = getans.getanswers(qs);
console.log(qs);

