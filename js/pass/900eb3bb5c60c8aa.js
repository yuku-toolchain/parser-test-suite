var o = {};
var p = new Proxy(o, {
  deleteProperty: function () {}
});