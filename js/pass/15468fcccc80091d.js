var obj = {};
var symA = Symbol("a");
var symB = Symbol("b");
obj[symA] = 1;
obj[symB] = 2;
Object.defineProperty(obj, symA, {
  configurable: false
});
var str = new String("");
str.a = 1;
str.b = 2;
Object.defineProperty(str, "a", {
  get: function () {}
});