var value = [86];
var x = {};
var iterationResult, iter;
iter = (function* () {
  var counter = 0;
  for ([...[x[yield]]] of [[86]]) {
    counter += 1;
  }
})();
iterationResult = iter.next();
iterationResult = iter.next('prop');