var o = {};
Object.defineProperty(o, "foo", {
  value: "hello",
  configurable: true
});
Object.preventExtensions(o);
Object.defineProperty(o, "foo", {
  get: function () {
    return 5;
  }
});
var fooDescrip = Object.getOwnPropertyDescriptor(o, "foo");