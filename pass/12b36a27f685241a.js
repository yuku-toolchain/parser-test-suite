function callbackfn(val, idx, obj) {
  return this.valueOf() === "hello!";
}
var obj = {
  0: 11,
  1: 9,
  length: 2
};