var calls = 0;
BigInt.prototype.toLocaleString = function () {
  return {
    toString: undefined,
    valueOf: function () {
      calls++;
      if (calls > 1) {}
    }
  };
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var sample = new TA([42n, 0n]);
  calls = 0;
});