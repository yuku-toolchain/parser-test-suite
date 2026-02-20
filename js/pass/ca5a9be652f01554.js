var value = {};
var poisonedThen = Object.defineProperty({}, 'then', {
  get: function () {
    throw value;
  }
});
var thenable = {
  then: function (resolve) {
    resolve(poisonedThen);
  }
};
Promise.race([thenable]).then(function () {}, function (val) {
  if (val !== value) {
    return;
  }
});