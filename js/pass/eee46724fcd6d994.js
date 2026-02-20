class Foo {
  constructor(a, b) {
    this.sum = a + b;
  }
}
var FooBound = Foo.bind(null, 1);
var FooTarget = new Proxy(FooBound, {});
var FooProxy = new Proxy(FooTarget, {
  construct: undefined
});
var foo = new FooBound(2);
class Bar extends Foo {
  get isBar() {
    return true;
  }
}
var bar = Reflect.construct(FooProxy, [3], Bar);