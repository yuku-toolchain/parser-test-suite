var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return 10 === this.threshold;
}
var thisArg = {
  threshold: 10
};
var obj = {
  0: 11,
  length: 1
};