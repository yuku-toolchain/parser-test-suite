function callbackfn(val, idx, obj) {
  return this.valueOf() === false;
}
var obj = {
  0: 11,
  length: 1
};