var kValue = "abc";
function callbackfn(val, idx, obj) {
  if (idx === 5) {
    return val === kValue;
  }
  return false;
}
var proto = {
  5: 100
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child[5] = kValue;
child.length = 10;