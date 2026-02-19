var accessed = false;
var proto = {
  length: 2
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child[0] = 12;
child[1] = 11;
child[2] = 9;
function callbackfn1(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj.length === 2;
}