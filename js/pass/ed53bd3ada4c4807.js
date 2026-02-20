var plainObjectTarget = new Proxy({
  foo: 1
}, {});
var plainObjectProxy = new Proxy(plainObjectTarget, {
  getOwnPropertyDescriptor: null
});
var fooDescriptor = {
  get: function () {},
  set: function (_value) {},
  enumerable: false,
  configurable: true
};
var target = new Proxy({}, {
  getOwnPropertyDescriptor: function (_target, key) {
    if (key === "foo") {
      return fooDescriptor;
    }
  },
  deleteProperty: function (_target, key) {
    if (key === "foo") {
      fooDescriptor = undefined;
    }
    return true;
  }
});
var proxy = new Proxy(target, {
  getOwnPropertyDescriptor: null
});