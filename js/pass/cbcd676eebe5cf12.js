var expected = (function () {
  return this;
})();
var thisArg = {};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(3);
  var results1 = [];
  sample.map(function () {
    results1.push(this);
    return 0n;
  });
  var results2 = [];
  sample.map(function () {
    results2.push(this);
    return 0n;
  }, thisArg);
});