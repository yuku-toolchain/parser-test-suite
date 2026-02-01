var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return this.valueOf() !== false;
}
var obj = {
  0: 11,
  length: 2
};