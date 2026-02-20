var separator = ["", ""].toLocaleString();
var calls;
BigInt.prototype.toLocaleString = function () {
  return {
    toString: undefined,
    valueOf: function () {
      calls++;
      return "hacks" + calls;
    }
  };
};
var expected = ["hacks1", "hacks2"].join(separator);
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 0n]);
  calls = 0;
});