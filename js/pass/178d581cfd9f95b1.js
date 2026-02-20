var badDelete = new Proxy({
  a: 1
}, {
  deleteProperty: function () {}
});