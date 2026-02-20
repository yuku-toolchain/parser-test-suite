var source = {
  "0": 42n,
  "1": 44n,
  length: 2
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var result = TA.from(source);
});