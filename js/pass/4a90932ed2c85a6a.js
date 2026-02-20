function callbackfn(val, idx, obj) {
  return val > 10;
}
var Foo = function () {};
Foo.prototype = [1, 2, 3];
var obj = new Foo();
obj.length = null;
var testResult = Array.prototype.map.call(obj, callbackfn);