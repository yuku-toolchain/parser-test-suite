var badDefine = new Proxy({
  0: null
}, {
  defineProperty: function () {}
});