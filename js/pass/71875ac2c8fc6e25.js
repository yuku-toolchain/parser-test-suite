var obj = {};
var toStringAccessed = false;
var valueOfAccessed = false;
var proto = {
  toString: function () {
    toStringAccessed = true;
    return "test";
  }
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
child.valueOf = function () {
  valueOfAccessed = true;
  return "10";
};
Object.defineProperty(obj, child, {});