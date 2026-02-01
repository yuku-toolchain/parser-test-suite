var o = {
  '42': true,
  length: 43
};
var p = new Proxy(o, {
  deleteProperty: function (t, prop) {
    if (prop === '42') {}
  }
});