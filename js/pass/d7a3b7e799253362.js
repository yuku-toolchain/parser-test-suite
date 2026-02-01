var index = {
  valueOf() {}
};
var badArrayTypes = typedArrayConstructors.filter(function (TA) {
  return TA !== Int32Array;
});
for (var badArrayType of badArrayTypes) {
  var typedArray = new badArrayType(new SharedArrayBuffer(8));
}