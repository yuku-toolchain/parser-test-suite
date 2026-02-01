var o1 = {};
Object.defineProperty(o1, 'p', {
  writable: false,
  value: 42
});
var result = Reflect.set(o1, 'p', 43);