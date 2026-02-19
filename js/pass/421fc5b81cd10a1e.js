var kValue = 'abc';
function callbackfn(val, idx, obj) {
  return idx === 5 && val === kValue;
}
var proto = {
  5: kValue
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.length = 10;
var newArr = Array.prototype.filter.call(child, callbackfn);