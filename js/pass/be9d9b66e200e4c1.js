var o = {};
var p = new Proxy(o, {
  ownKeys: function () {}
});