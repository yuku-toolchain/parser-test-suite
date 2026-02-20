var separator = ["", ""].toLocaleString();
var calls;
BigInt.prototype.toLocaleString = function () {
  return {
    toString: function () {
      calls++;
      return "hacks" + calls;
    },
    valueOf: function () {}
  };
};
var arr = [42n, 0n];
var expected = ["hacks1", "hacks2"].join(separator);
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA(arr);
  calls = 0;
});