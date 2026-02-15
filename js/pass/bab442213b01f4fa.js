var obj = {
  length: 4
};
Object.defineProperty(obj, "2", {
  get() {}
});
testWithBigIntTypedArrayConstructors(function (TA) {
  obj[0] = 0n;
  obj[1] = 0n;
});