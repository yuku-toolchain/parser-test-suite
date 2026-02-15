function foo() {}
Object.defineProperty(foo.prototype, "bar", {
  value: "unwritable"
});
var o = new foo();