var source = [42, 43, 44];
testWithBigIntTypedArrayConstructors(function (TA) {
  var results = [];
  var mapfn = function (kValue, k) {
    results.push({
      kValue: kValue,
      k: k,
      argsLength: arguments.length
    });
    return 0n;
  };
  TA.from(source, mapfn);
});