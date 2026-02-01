var o1 = {};
var p = new Proxy(o1, {
  preventExtensions: function () {}
});