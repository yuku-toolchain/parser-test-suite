var iterationResult, x, iter;
iter = (function* () {
  var result;
  var vals = {};
  result = {x = yield} = vals;
})();
iterationResult = iter.next();
iterationResult = iter.next(3);