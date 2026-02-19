var called = 0;
function callbackfn(val, idx, obj) {
  called++;
  return val !== 8;
}
var obj = {
  0: 11,
  10: 12,
  non_index_property: 8,
  length: 20
};