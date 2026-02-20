var valueOfCalls = 0;
var value = {
  valueOf: function () {
    ++valueOfCalls;
    return 2n;
  }
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var target, receiver;
  [1, 1.5, -1].forEach(function (key) {
    Object.defineProperty(TA.prototype, key, {
      get: function () {},
      set: function (_v) {},
      configurable: true
    });
    target = new TA([0n]);
    receiver = Object.create(target);
    receiver[key] = value;
    var proxyTrapCalls = 0;
    target = new TA([0n]);
    receiver = new Proxy(Object.create(target), {
      defineProperty(_target, key, desc) {
        ++proxyTrapCalls;
        Object.defineProperty(_target, key, desc);
        return true;
      }
    });
    receiver[key] = value;
    target = new TA([0n]);
    receiver = Object.preventExtensions(Object.create(target));
    receiver[key] = value;
  });
  target = new TA([0n]);
  receiver = Object.setPrototypeOf([], target);
  receiver[1] = value;
  target = new TA([0n]);
  receiver = Object.setPrototypeOf(new String(""), target);
  receiver[1] = value;
});