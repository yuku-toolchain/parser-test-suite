var iterationResult, iter, x = undefined;
iter = (function* () {
  var result;
  var vals = {
    x: {}
  };
  result = {x: {x = yield}} = vals;
})();
iterationResult = iter.next();
iterationResult = iter.next(4);