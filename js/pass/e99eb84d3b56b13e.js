function* fn() {}
var bound = (function* () {}).bind();
Object.defineProperty(bound, "prototype", {
  get: function () {}
});
var proxy = new Proxy(function* () {}, {});