var target = {};
var p = new Proxy(target, {
  setPrototypeOf: function () {}
});