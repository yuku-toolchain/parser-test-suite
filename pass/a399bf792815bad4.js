testWithBigIntTypedArrayConstructors(function (TA) {
  var mapfn = function (kValue) {
    return kValue * 2n;
  };
  var result = TA.from([42n, 43n, 42n], mapfn);
});