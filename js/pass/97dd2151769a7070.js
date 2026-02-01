var accessed = false;
function callbackfn(val, idx, o) {
  accessed = true;
  return 5 === this.valueOf();
}
var obj = {
  0: 11,
  length: 2
};