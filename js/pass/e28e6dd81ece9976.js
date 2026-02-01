var returnValue = null;
var nonThenable = {
  then: null
};
var promise = new Promise(function (resolve) {
  returnValue = resolve(nonThenable);
});
promise.then(function (value) {
  if (value !== nonThenable) {
    return;
  }
}, function () {});