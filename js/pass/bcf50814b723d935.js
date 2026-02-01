function ProxyBase() {
  return new Proxy(this, {
    defineProperty: function (target, key, descriptor) {}
  });
}
class Base extends ProxyBase {
  f = "Test262";
}