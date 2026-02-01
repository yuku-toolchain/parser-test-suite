var obj = {};
obj.foo = true;
Object.defineProperty(obj, "foo", {
  value: false
});