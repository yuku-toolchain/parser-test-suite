var o1 = {};
var fn = function () {};
Object.defineProperty(o1, 'p', {
  get: fn,
  configurable: true
});
var result = Reflect.getOwnPropertyDescriptor(o1, 'p');