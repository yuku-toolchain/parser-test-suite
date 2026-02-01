var promise = new Promise(function (resolve) {
  resolve();
});
var log = '';
promise.then(function () {
  log += 'a';
}, function () {
  log += 'A';
});
promise.then(function () {
  log += 'b';
}, function () {
  log += 'B';
});
promise.then(function () {
  log += 'c';
}, function () {
  log += 'C';
});
promise.then(function () {
  if (log !== 'abc') {
    return;
  }
}, function () {});