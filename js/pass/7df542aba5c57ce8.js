var callCount = 0;
var prms = new Promise(function (resolve) {
  resolve();
});
Object.defineProperty(prms, 'constructor', {
  get: function () {
    callCount += 1;
    return Promise;
  }
});
prms.then(function () {
  if (callCount !== 1) {
    return;
  }
}, function () {});