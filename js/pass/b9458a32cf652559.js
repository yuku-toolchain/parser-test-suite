let proto = TypedArray.prototype;
let throwDesc = {
  set: function () {}
};
Object.defineProperty(proto, '0', throwDesc);
Object.defineProperty(proto, '1', throwDesc);
testWithBigIntTypedArrayConstructors(function (TA) {
  let sample = new TA(2);
});