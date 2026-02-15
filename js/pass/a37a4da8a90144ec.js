async function* fn() {}
var bound = (async function* () {}).bind();
Object.defineProperty(bound, "prototype", {
  get: function () {}
});
var proxy = new Proxy(async function* () {}, {});