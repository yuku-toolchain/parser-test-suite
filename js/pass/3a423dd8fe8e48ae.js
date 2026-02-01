var kValue = 'abc';
function callbackfn(val, idx, obj) {
  if (5 === idx) {
    return kValue === val;
  }
  return false;
}
var proto = {
  5: kValue
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.length = 10;