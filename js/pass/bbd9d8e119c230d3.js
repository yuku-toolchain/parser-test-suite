var o1 = {};
var receiver = {};
Object.defineProperty(receiver, 'p', {
  writable: false,
  value: 42
});
var result = Reflect.set(o1, 'p', 43, receiver);