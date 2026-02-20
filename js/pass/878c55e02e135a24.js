function concatTypedArray(type, elems, modulo) {
  var items = new Array(elems);
  var ta_by_len = new type(elems);
  for (var i = 0; i < elems; ++i) {
    ta_by_len[i] = items[i] = modulo === false ? i : elems % modulo;
  }
  var ta = new type(items);
  ta[Symbol.isConcatSpreadable] = true;
  ta_by_len[Symbol.isConcatSpreadable] = true;
  ta = new type(1);
  var defValue = ta[0];
  var expected = new Array(4000);
  expected[0] = defValue;
  Object.defineProperty(ta, "length", {
    value: 4000
  });
  ta[Symbol.isConcatSpreadable] = true;
}
var max = [Math.pow(2, 8), Math.pow(2, 16), Math.pow(2, 32), false, false];
[Uint8Array, Uint16Array, Uint32Array, Float32Array, Float64Array].forEach(function (ctor, i) {
  concatTypedArray(ctor, 4000, max[i]);
});