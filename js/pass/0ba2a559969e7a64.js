var p = new Proxy(function () {
  throw 'not the Test262Error you are looking for';
}, {
  apply: function (t, c, args) {}
});