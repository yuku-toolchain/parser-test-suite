var obj = {};
obj.foo = true;
Object.defineProperties(obj, {
  foo: {
    value: false
  }
});