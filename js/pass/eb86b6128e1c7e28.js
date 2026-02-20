var x = {};
var iterationResult, iter;
iter = (function* () {
  var counter = 0;
  for ([...x[yield]] of [[33, 44, 55]]) {
    counter += 1;
  }
})();
iterationResult = iter.next();
iterationResult = iter.next('prop');