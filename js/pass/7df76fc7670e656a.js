var value = {};
var resolve;
var poisonedThen = Object.defineProperty({}, 'then', {
  get: function () {
    throw value;
  }
});
Promise.resolve(poisonedThen).then(function () {}, function (val) {
  if (val !== value) {
    return;
  }
});