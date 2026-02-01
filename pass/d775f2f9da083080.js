var value = {};
var poisonedThen = Object.defineProperty({}, 'then', {
  get: function () {
    throw value;
  }
});
var p1 = new Promise(function (resolve) {
  resolve();
});
var p2;
p2 = p1.then(function () {
  return poisonedThen;
});
p2.then(function (x) {}, function (x) {
  if (x !== value) {
    return;
  }
});