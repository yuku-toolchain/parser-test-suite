var target = {
  foo: 1
};
Object.defineProperty(target, "attr", {
  configurable: false,
  enumerable: true,
  value: true
});
var p = new Proxy(target, {
  ownKeys: function () {
    return ["foo"];
  }
});