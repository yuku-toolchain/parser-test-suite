var o = {};
var p = new Proxy(o, {
  has: function () {}
});