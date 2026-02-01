var proto = {
  foo: 0
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var obj = new ConstructFun();
Object.defineProperty(obj, "foo", {
  value: 10,
  configurable: true
});
Object.seal(obj);