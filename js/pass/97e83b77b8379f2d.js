let arr = [];
let expectedTarget = null;
function ProxyBase() {
  expectedTarget = this;
  return new Proxy(this, {
    defineProperty: function (target, key, descriptor) {
      arr.push(key);
      arr.push(descriptor.value);
      arr.push(target);
      return Reflect.defineProperty(target, key, descriptor);
    }
  });
}
class Test extends ProxyBase {
  f = 3;
  g = "Test262";
}
let t = new Test();