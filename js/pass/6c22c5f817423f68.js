var o = {
  '0': 42,
  length: 1
};
var p = new Proxy(o, {
  has: function () {}
});