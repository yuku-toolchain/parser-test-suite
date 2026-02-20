var obj = {
  valueOf() {}
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var source = [42n, obj, 1n];
  var lastValue;
  var mapfn = function (kValue) {
    lastValue = kValue;
    return kValue;
  };
});