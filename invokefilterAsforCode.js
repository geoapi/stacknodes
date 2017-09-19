var dq = require('./filterQsforAs')
var da = dq.filterAnswers();
var ga = require('./getanswers');
ga.getanswers(da);
