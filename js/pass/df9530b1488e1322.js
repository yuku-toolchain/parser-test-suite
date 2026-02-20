var iterationResult, iter, x;
iter = (function* () {
  var counter = 0;
  for ([...{x = yield}] of [[{}]]) {
    counter += 1;
  }
})();
iterationResult = iter.next();
iterationResult = iter.next(4);