var value = [[22]];
var x = {};
var iterationResult, iter;
iter = (function* () {
  var counter = 0;
  for ([[x[yield]]] of [value]) {
    counter += 1;
  }
})();
iterationResult = iter.next();
iterationResult = iter.next('prop');