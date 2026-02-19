var proto = TypedArray.prototype;
var throwDesc = {
  get: function () {}
};
Object.defineProperty(proto, "0", throwDesc);
Object.defineProperty(proto, "1", throwDesc);
testWithBigIntTypedArrayConstructors(function (TA) {
  var sab = new SharedArrayBuffer(TA.BYTES_PER_ELEMENT * 2);
  var sample = new TA(sab);
  sample.set([42n, 1n]);
});