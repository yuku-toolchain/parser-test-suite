var iterationResult, iter, x;
iter = (function* () {
  var result;
  var vals = {};
  result = {x: x = yield} = vals;
})();
iterationResult = iter.next();
iterationResult = iter.next(86);