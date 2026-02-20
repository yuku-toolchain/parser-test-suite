function callbackfn(val, idx, obj) {
  return val === 11 && idx === 0;
}
var func = function (a, b) {
  return Array.prototype.filter.call(arguments, callbackfn);
};
var newArr = func(11);