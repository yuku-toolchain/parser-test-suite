function foo() {}
Object.defineProperty(foo, "length", {
  value: undefined
});
Object.defineProperty(foo, "length", {
  value: null
});
Object.defineProperty(foo, "length", {
  value: true
});
Object.defineProperty(foo, "length", {
  value: "1"
});
Object.defineProperty(foo, "length", {
  value: Symbol("1")
});
Object.defineProperty(foo, "length", {
  value: new Number(1)
});
function bar() {}
Object.setPrototypeOf(bar, {
  length: 42
});
var bound = Function.prototype.bind.call(bar, null, 1);