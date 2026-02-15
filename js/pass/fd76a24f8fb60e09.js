var o = {};
Object.defineProperty(o, "foo", {
  get: function () {
    return 5;
  },
  configurable: true
});
Object.preventExtensions(o);
Object.defineProperty(o, "foo", {
  value: "hello",
  writable: true
});
var fooDescrip = Object.getOwnPropertyDescriptor(o, "foo");