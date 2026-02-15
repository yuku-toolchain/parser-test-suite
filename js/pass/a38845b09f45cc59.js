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
    receiver = {};
    target = new TA([0n]);
    receiver = new TA([1n]);
    target = new TA([0n]);
    receiver = Object.defineProperty({}, key, {
      get: function () {
        return 1n;
      },
      set: function (_v) {},
      configurable: true
    });
    target = new TA([0n]);
    receiver = Object.defineProperty({}, key, {
      value: 1n,
      writable: false,
      configurable: true
    });
    target = new TA([0n]);
    receiver = Object.preventExtensions({});
  });
  target = new TA([0n]);
  receiver = new TA([1n, 1n]);
});