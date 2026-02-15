var sym = Symbol();
var obj = {};
Object.defineProperty(obj, sym, {
  value: 1
});
obj[sym] = 2;