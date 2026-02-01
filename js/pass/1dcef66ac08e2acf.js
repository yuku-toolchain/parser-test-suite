function callbackfn(val, idx, obj) {
  return 'hello' === this.valueOf();
}
var obj = {
  0: 11,
  length: 2
};
var newArr = Array.prototype.filter.call(obj, callbackfn, "hello");