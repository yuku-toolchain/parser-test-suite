var iterationResult, iter, x = undefined;
iter = (function* () {
  var counter = 0;
  for ({x: {x = yield}} of [{
    x: {}
  }]) {
    counter += 1;
  }
})();
iterationResult = iter.next();
iterationResult = iter.next(4);