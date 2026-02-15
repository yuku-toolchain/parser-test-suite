async function fn() {}
Object.defineProperty(fn, "prototype", {
  get: function () {}
});
var bound = (async function () {}).bind();
Object.defineProperty(bound, "prototype", {
  get: function () {}
});
var proxy = new Proxy(async function () {}, {
  get: function () {}
});