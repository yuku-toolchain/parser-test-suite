var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  if (idx < 10) {
    accessed = true;
  }
  if (idx === 10) {}
}
var obj = {
  0: 11,
  4: 10,
  10: 8,
  length: 20
};