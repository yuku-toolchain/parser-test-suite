var string = new String("str");
var stringTarget = new Proxy(string, {});
var stringProxy = new Proxy(stringTarget, {});
Object.preventExtensions(string);
var func = function () {};
var funcTarget = new Proxy(func, {});
var funcProxy = new Proxy(funcTarget, {});
Object.defineProperty(funcProxy, "name", {
  value: "foo"
});