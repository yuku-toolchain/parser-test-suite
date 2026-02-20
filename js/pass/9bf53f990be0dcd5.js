class O extends Object {}
var o1 = new O({
  a: 1
});
var o2 = Reflect.construct(Object, [{
  b: 2
}], O);