var promise;
var iter = (function* () {
  promise = import('./2nd-param_FIXTURE.js');
})();
iter.next();
iter.next();
promise.then(function (module) {}).then($DONE, $DONE);