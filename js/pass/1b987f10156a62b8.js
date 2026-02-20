var obj = {};
var symA = Symbol("a");
var symB = Symbol("b");
obj[symA] = 1;
obj[symB] = 2;
Object.defineProperty(obj, symA, {
  configurable: false
});
var objDescs = Object.getOwnPropertyDescriptors(obj);
var re = /(?:)/g;
re.a = 1;
Object.defineProperty(re, "lastIndex", {
  value: 2
});
var reDescs = Object.getOwnPropertyDescriptors(re);