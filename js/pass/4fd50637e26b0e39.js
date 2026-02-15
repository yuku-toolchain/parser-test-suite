const index = {
  valueOf() {}
};
var nonSharedArrayTypes = typedArrayConstructors.filter(function (TA) {
  return TA !== Int32Array;
});
for (const nonSharedArrayType of nonSharedArrayTypes) {
  const typedArray = new nonSharedArrayType(new SharedArrayBuffer(8));
}