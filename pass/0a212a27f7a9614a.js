function callbackfn(val, idx, obj) {
  return this.valueOf() === 5;
}
var obj = {
  0: 11,
  length: 1
};