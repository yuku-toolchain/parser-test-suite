testWithBigIntTypedArrayConstructors(function (TA) {
  var results = [];
  var mapfn = function (x) {
    results.push(this);
    return x;
  };
  TA.from([42n, 43n], mapfn);
});