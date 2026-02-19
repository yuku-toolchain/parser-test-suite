var sym = Symbol();
var obj = {};
Object.defineProperty(obj, sym, {
  value: 1,
  writable: true
});
obj[sym] = 2;