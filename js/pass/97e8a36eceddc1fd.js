var o = {};
var p = new Proxy(o, {
  defineProperty: function () {}
});