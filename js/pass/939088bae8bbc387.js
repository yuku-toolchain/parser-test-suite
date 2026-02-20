var o = new Proxy({}, {
  getPrototypeOf: function () {}
});
var o2 = Object.create(o);
var f = function () {};