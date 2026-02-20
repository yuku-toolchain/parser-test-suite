var obj = {};
obj.foo = undefined;
Object.defineProperty(obj, "foo", {
  value: 100
});