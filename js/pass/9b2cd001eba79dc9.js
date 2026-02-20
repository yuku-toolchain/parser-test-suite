var returnValue = null;
var value = {};
var resolve;
var poisonedThen = Object.defineProperty({}, 'then', {
  get: function () {
    throw value;
  }
});
var promise = new Promise(function (_resolve) {
  resolve = _resolve;
});
promise.then(function () {}, function (val) {
  if (val !== value) {
    return;
  }
});
returnValue = resolve(poisonedThen);