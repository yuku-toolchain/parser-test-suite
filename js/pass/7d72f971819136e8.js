var value = [33];
var x = {};
var iterationResult, iter;
iter = (function* () {
  var result;
  var vals = [33];
  result = [x[yield]] = vals;
})();
iterationResult = iter.next();
iterationResult = iter.next('prop');