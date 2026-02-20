class Foo {
  constructor(arg) {
    this.arg = arg;
  }
}
var FooTarget = new Proxy(Foo, {});
var FooProxy = new Proxy(FooTarget, {
  construct: null
});
var foo = new FooProxy(1);
class Bar extends Foo {
  get isBar() {
    return true;
  }
}
var bar = Reflect.construct(FooProxy, [2], Bar);