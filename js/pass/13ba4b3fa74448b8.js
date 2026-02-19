function callbackfn(val, idx, obj) {
  return undefined === val && idx === 1;
}
var obj = {
  length: 2
};
Object.defineProperty(obj, "1", {
  set: function () {},
  configurable: true
});
Object.prototype[1] = 10;
var newArr = Array.prototype.filter.call(obj, callbackfn);