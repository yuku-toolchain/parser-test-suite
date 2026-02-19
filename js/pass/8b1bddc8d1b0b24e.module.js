var source = [42, 43];
testWithBigIntTypedArrayConstructors(function (TA) {
  var results = [];
  var mapfn = function () {
    results.push(this);
    return 0n;
  };
  TA.from(source, mapfn);
});