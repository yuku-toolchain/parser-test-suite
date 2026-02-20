var x = {};
var iterationResult, iter;
iter = (function* () {
  var result;
  var vals = [33, 44, 55];
  result = [...x[yield]] = vals;
})();
iterationResult = iter.next();
iterationResult = iter.next('prop');