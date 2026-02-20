function callbackfn(val, idx, obj) {
  return true;
}
var obj = {
  1: 11,
  2: 9,
  length: {
    toString: function () {
      return '2';
    }
  }
};
var newArr = Array.prototype.filter.call(obj, callbackfn);