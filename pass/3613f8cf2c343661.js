var nonThenable = {
  then: null
};
var reject;
var p1 = new Promise(function (_, _reject) {
  reject = _reject;
});
var p2;
p2 = p1.then(function () {}, function () {
  return nonThenable;
});
p2.then(function (value) {
  if (value !== nonThenable) {
    return;
  }
}, function () {});
reject();