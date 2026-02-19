var x = {};
var iterationResult, iter;
iter = (function* () {
  var counter = 0;
  for ({x: x[yield]} of [{
    x: 23
  }]) {
    counter += 1;
  }
})();
iterationResult = iter.next();
iterationResult = iter.next('prop');