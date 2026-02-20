var badDefine = new Proxy([null], {
  defineProperty: function (_, name) {}
});