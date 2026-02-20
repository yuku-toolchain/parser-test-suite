var obj = {
  "2": {
    valueOf() {}
  },
  length: 4
};
testWithBigIntTypedArrayConstructors(function (TA) {
  obj[0] = 0n;
  obj[1] = 0n;
});