var x = {};
var iterationResult, iter;
iter = (function* () {
  var result;
  var vals = {
    x: 23
  };
  result = {x: x[yield]} = vals;
})();
iterationResult = iter.next();
iterationResult = iter.next('prop');