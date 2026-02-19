var expected = (function () {
  return this;
})();
var thisArg = {};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(3);
  var results1 = [];
  sample.forEach(function () {
    results1.push(this);
  });
  var results2 = [];
  sample.forEach(function () {
    results2.push(this);
  }, thisArg);
});