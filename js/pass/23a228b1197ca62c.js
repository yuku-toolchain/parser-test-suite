var fn = () => {};
Object.defineProperty(fn, "prototype", {
  get: function () {}
});
var bound = (() => {}).bind();
Object.defineProperty(bound, "prototype", {
  get: function () {}
});
var proxy = new Proxy(() => {}, {
  get: function () {}
});