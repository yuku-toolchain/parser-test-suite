var returnValue = null;
var nonThenable = {
  then: null
};
var resolve;
var promise = new Promise(function (_resolve) {
  resolve = _resolve;
});
promise.then(function (value) {
  if (value !== nonThenable) {
    return;
  }
}, function () {});
returnValue = resolve(nonThenable);