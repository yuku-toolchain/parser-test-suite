var promise = new Promise(function (_, reject) {
  reject();
});
var log = '';
promise.then(function () {
  log += 'A';
}, function () {
  log += 'a';
});
promise.then(function () {
  log += 'B';
}, function () {
  log += 'b';
});
promise.then(function () {
  log += 'C';
}, function () {
  log += 'c';
});
promise.then(function () {}, function () {
  if (log !== 'abc') {
    return;
  }
});