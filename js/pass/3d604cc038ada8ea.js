var result = {};
var p = new Proxy(function () {}, {
  apply: function (t, c, args) {
    return result;
  }
});