var called = 0;
function callbackfn(val, idx, obj) {
  called++;
  return val === 11;
}
var obj = {
  0: 9,
  10: 8,
  non_index_property: 11,
  length: 20
};