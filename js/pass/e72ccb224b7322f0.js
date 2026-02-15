var returnValue = null;
var value = {};
var poisonedThen = Object.defineProperty({}, 'then', {
  get: function () {
    throw value;
  }
});
var promise = new Promise(function (resolve) {
  returnValue = resolve(poisonedThen);
});
promise.then(function () {}, function (val) {
  if (val !== value) {
    return;
  }
});