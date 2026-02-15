var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return 'hello' === this.valueOf();
}
var obj = {
  0: 11,
  length: 2
};