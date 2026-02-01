var value = [86];
var x = {};
var iterationResult, iter;
iter = (function* () {
  var result;
  var vals = [86];
  result = [...[x[yield]]] = vals;
})();
iterationResult = iter.next();
iterationResult = iter.next('prop');