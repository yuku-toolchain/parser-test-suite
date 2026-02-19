var target = {
  attr: 1
};
var p = new Proxy(target, {});
Object.defineProperty(target, "attr", {
  configurable: false,
  enumerable: true,
  value: 1
});