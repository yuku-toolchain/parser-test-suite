var arrObj = [];
var toStringAccessed = false;
var valueOfAccessed = false;
var proto = {
  valueOf: function () {
    valueOfAccessed = true;
    return 2;
  }
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
child.toString = function () {
  toStringAccessed = true;
  return 3;
};
Object.defineProperty(arrObj, "length", {
  value: child
});