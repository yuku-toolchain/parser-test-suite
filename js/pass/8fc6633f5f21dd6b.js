var obj = {};
obj.foo = 101;
Object.defineProperties(obj, {
  foo: {
    value: 101,
    enumerable: true,
    writable: true,
    configurable: true
  }
});