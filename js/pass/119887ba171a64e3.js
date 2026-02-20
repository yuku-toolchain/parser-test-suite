var value = [[22]];
var x = {};
var iterationResult, iter;
iter = (function* () {
  var result;
  var vals = value;
  result = [[x[yield]]] = vals;
})();
iterationResult = iter.next();
iterationResult = iter.next('prop');