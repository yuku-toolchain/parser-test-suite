var expected = (function () {
  return this;
})();
var thisArg = {};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(3);
  var results1 = [];
  sample.every(function () {
    results1.push(this);
    return true;
  });
  var results2 = [];
  sample.every(function () {
    results2.push(this);
    return true;
  }, thisArg);
});