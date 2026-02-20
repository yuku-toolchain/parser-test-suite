var valueOfCalls = 0;
var value = {
  valueOf: function () {
    ++valueOfCalls;
    return 2n;
  }
};
testWithBigIntTypedArrayConstructors(function (TA) {
  var target, receiver;
  Object.defineProperty(TA.prototype, 0, {
    get: function () {},
    set: function (_v) {},
    configurable: true
  });
  target = new TA([0n]);
  receiver = {};
  target = new TA([0n]);
  receiver = new TA([1n]);
  target = new TA([0n, 0n]);
  receiver = new TA([1n]);
  target = new TA([0n]);
  receiver = Object.preventExtensions({});
  target = new TA([0n]);
  receiver = {
    get 0() {
      return 1n;
    },
    set 0(_v) {}
  };
  target = new TA([0n]);
  receiver = Object.defineProperty({}, 0, {
    value: 1n,
    writable: false,
    configurable: true
  });
});