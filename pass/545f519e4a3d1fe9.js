function callbackfn(prevVal, curVal, idx, obj) {
  return obj.length === 2;
}
var proto = {
  length: 2
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child[0] = 12;
child[1] = 11;
child[2] = 9;